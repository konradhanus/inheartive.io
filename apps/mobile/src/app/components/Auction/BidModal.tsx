import React from 'react';
import { bidModalStyles as styles } from './bid-styles';
import { Text } from '@inheartive/ui/atoms';
import { CustomModal } from '@inheartive/ui/molecules';

interface BidModalProps {
  closeModal: () => void;
  confirmModal: () => void;
  bid: number;
}

export const BidModal = ({ closeModal, bid, confirmModal }: BidModalProps) => (
  <CustomModal closeModal={closeModal} confirmModal={confirmModal}>
    <Text style={styles.modalText}>Do you want to confirm your bid: {bid} ?</Text>
  </CustomModal>
);
