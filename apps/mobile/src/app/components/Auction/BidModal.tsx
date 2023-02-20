import React from 'react';
import { Modal } from 'react-native';
import { bidModalStyles as styles } from './bid-styles';
import { Text, View, Button } from '@inheartive/ui/atoms';

interface BidModalProps {
  closeModal: () => void;
  bid: number;
}

export const BidModal = ({ closeModal, bid }: BidModalProps) => (
  <View style={styles.centeredView}>
    <Modal animationType='slide' transparent={true} visible={true} onRequestClose={closeModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Do you want to confirm your bid: {bid} ?</Text>

          <View style={styles.actions}>
            <Button style={styles.actionButton} variant='lighGray' onPress={closeModal}>
              Cancel
            </Button>
            <Button onPress={closeModal}>Confirm</Button>
          </View>
        </View>
      </View>
    </Modal>
  </View>
);
