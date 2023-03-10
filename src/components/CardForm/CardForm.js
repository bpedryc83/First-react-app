import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addCard } from '../../redux/cardsRedux';

const CardForm = props => {
  const [title, setTitle] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = e => {
      e.preventDefault();
      const id = shortid();
      const columnId = props.columnId;
      const isFavorite = false;
      dispatch(addCard( { id, columnId, title, isFavorite} ));
      setTitle('');
  }

	return (
    <div className={styles.formDiv}>
      <form className={styles.cardForm} onSubmit={handleSubmit}>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
        <Button>Add card</Button>
      </form>
    </div>
	);
};

export default CardForm;