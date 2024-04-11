import React from 'react';
import { useDispatch } from 'react-redux';
import TitleCard from '../../components/Cards/TitleCard';
import { openModal } from '../common/modalSlice';
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';

function AddNewSaaS() {
  const dispatch = useDispatch();

  const openAddNewSaaSModal = () => {
    dispatch(openModal({ title: 'Add New SaaS', bodyType: MODAL_BODY_TYPES.SAAS_ADD_NEW }));
  };

  return (
    <TitleCard title="Integration" topMargin="mt-2">
      <div className="text-right">
        <button className="btn btn-sm btn-primary" onClick={openAddNewSaaSModal}>
          Add New
        </button>
      </div>
    </TitleCard>
  );
}

export default AddNewSaaS;
