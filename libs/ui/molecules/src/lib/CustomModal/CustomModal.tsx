import React, { ReactNode } from 'react';
import { Modal } from 'react-native';
import { modalStyles as styles } from './styles';
import { View, Button } from '@inheartive/ui/atoms';

interface CustomModalProps {
  closeModal: () => void;
  children: ReactNode;
}

export const CustomModal = ({ closeModal, children }: CustomModalProps) => (
  <View style={styles.centeredView}>
    <Modal animationType='slide' transparent={true} visible={true} onRequestClose={closeModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {children}
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
