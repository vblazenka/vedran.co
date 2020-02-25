// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    { isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}>
      JavaScript developer passionate about building fast and scalable web interfaces, teaching and organizing events. Coding at <a href="https://kiwi.com/" target="_blank">Kiwi.com</a>. Organizing and sharing knowledged at <a href="https://www.meetup.com/JavaScript-Zagreb/" target="_blank">JavaScript Zagreb</a> and <a href="https://nodeschool.io/zagreb/" target="_blank">NodeSchool Zagreb</a>
    </p>
  </div>
);

export default Author;
