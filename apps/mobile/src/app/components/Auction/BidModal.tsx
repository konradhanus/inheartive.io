import React from 'react';
import { bidModalStyles as styles } from './bid-styles';
import { Text } from '@inheartive/ui/atoms';
import { CustomModal } from '@inheartive/ui/molecules';

interface BidModalProps {
  closeModal: () => void;
  bid: number;
}

export const BidModal = ({ closeModal, bid }: BidModalProps) => (
  <CustomModal closeModal={closeModal}>
    <Text style={styles.modalText}>Do you want to confirm your bid: {bid} ?</Text>
  </CustomModal>
);
