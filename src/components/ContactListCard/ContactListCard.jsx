import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from 'redux/operations';

export const ContactListCard = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(updateContact({ id, name, number }));
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {name}: {number}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};
