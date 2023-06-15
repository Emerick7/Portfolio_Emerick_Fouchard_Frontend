/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useFilePreview } from '../../../lib/customHooks';
import styles from './WorkForm.module.css';
import { updateWork, addWork } from '../../../lib/common';

function WorkForm({ work, validate }) {
  //const userRating = work ? work.ratings.find((elt) => elt.userId === localStorage.getItem('userId'))?.grade : 0;

  //const [rating, setRating] = useState(0);

  const navigate = useNavigate();
  const {
    register, watch, formState, handleSubmit, reset,
  } = useForm({
    defaultValues: useMemo(() => ({
      title: work?.title,
      url: work?.url,
      year: work?.year,
      desc: work?.desc,
    }), [work]),
  });
  useEffect(() => {
    reset(work);
  }, [work]);
  const file = watch(['file']);
  const [filePreview] = useFilePreview(file);

  /*useEffect(() => {
    setRating(userRating);
  }, [userRating]);

  useEffect(() => {
    if (!work && formState.dirtyFields.rating) {
      const rate = document.querySelector('input[name="rating"]:checked').value;
      setRating(parseInt(rate, 10));
      formState.dirtyFields.rating = false;
    }
  }, [formState]);*/

  const onSubmit = async (data) => {
    // When we create a new work
    if (!work) {
      if (!data.file[0]) {
        alert('Vous devez ajouter une image');
      }
      const newWork = await addWork(data);
      if (!newWork.error) {
        validate(true);
      } else {
        alert(newWork.message);
      }
    } else {
      const updatedWork = await updateWork(data, data.id);
      if (!updatedWork.error) {
        navigate('/');
      } else {
        alert(updatedWork.message);
      }
    }
  };

  //const readOnlyStars = !!work;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
      <input type="hidden" id="id" {...register('id')} />
      <label htmlFor="title">
        <p>Titre du projet</p>
        <input type="text" id="title" {...register('title')} />
      </label>
      <label htmlFor="url">
        <p>Lien du projet</p>
        <input type="text" id="url" {...register('url')} />
      </label>
      <label htmlFor="year">
        <p>Année de réalisation</p>
        <input type="text" id="year" {...register('year')} />
      </label>
      <label htmlFor="desc">
        <p>Description</p>
        <input type="text" id="desc" {...register('desc')} />
      </label>
      {/*<label htmlFor="rate">
        <p>Note</p>
        <div className={styles.Stars}>
          {generateStarsInputs(rating, register, readOnlyStars)}
        </div>
        </label>*/}
      <label htmlFor="file">
        <p>Visuel</p>
        <div className={styles.AddImage}>
          {filePreview || work?.imgUrl ? (
            <>
              <img src={filePreview ?? work?.imgUrl} alt="preview" />
              <p>Modifier</p>
            </>
          ) : (
            <>
              <p>Ajouter une image</p>
            </>
          )}

        </div>
        <input {...register('file')} type="file" id="file" />
      </label>
      <button type="submit">Publier</button>
    </form>
  );
}

WorkForm.propTypes = {
  work: PropTypes.shape({
    id: PropTypes.string,
    _id: PropTypes.string,
    userId: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    year: PropTypes.number,
    imgUrl: PropTypes.string,
    desc: PropTypes.string,
  }),
  validate: PropTypes.func,
};

WorkForm.defaultProps = {
  work: null,
  validate: null,
};

export default WorkForm;