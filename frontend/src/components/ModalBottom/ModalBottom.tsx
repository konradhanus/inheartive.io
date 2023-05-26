import { Button, Icon, IconType, Input, Row, View } from '../../libs/ui/atoms';
import { AuctionLeftHearts } from '../../libs/ui/molecules';
import React, { MutableRefObject, useEffect, useState } from 'react';

import { Auction } from '../../libs/data';
import BottomSheet from 'react-native-gesture-bottom-sheet';
const MAX_BID_VALUE = process.env.MAX_BID_VALUE;

export interface BottomSheet {
    show: () => void;
    close: () => void;
}
interface ModalBottomProps {
    bottomSheet: MutableRefObject<BottomSheet | undefined>;
    auction: Auction;
    confirmModal: (bid: number) => void;
    bid: number;
}

const ModalBottom = (props: ModalBottomProps) => {
    const { bottomSheet, auction, confirmModal } = props;

    let bid = props.bid;

    const [enteredValue, setEnteredValue] = useState(`${bid + 1}`);
    const [isDisabled, setIsDisabled] = useState(false);

    function bidInputHandler(enteredText: string) {
        const enteredTextToNumber = parseInt(enteredText);
        enteredTextToNumber > bid && enteredTextToNumber < MAX_BID_VALUE
            ? setIsDisabled(false)
            : setIsDisabled(true);

        setEnteredValue(enteredText);
    }

    function changeBidValue() {
        const chosenNumber = parseInt(enteredValue);
        bid = chosenNumber;
        confirmModal(bid);
    }

    useEffect(() => {
        setEnteredValue(`${bid + 1}`);
    }, [bid]);

    return (
        <BottomSheet
            draggable={false}
            hasDraggableIcon
            ref={bottomSheet}
            height={200}
        >
            <View>
                <View mx={16} justifyContent='center'>
                    <Row padding='4px'>
                        <AuctionLeftHearts
                            fSize='24px'
                            quantity={bid}
                            authorName={auction.author.firstName}
                        />
                    </Row>
                    <Row
                        space={1.5}
                        alignItems='center'
                        background='#B4B3AF'
                        borderRadius='16px'
                        padding='4px'
                    >
                        <Icon name={IconType.favoriteOutline} size={40} />
                        <Input
                            color='grey'
                            fontSize='24px'
                            padding='0'
                            width='80%'
                            textDecorationColor='transparent'
                            focusOutlineColor='transparent'
                            bgColor='transparent'
                            background='transparent'
                            borderColor='transparent'
                            keyboardType='numeric'
                            onChangeText={bidInputHandler}
                            value={enteredValue}
                        />
                    </Row>
                    <Row justifyContent='center' alignItems='center'>
                        <Button
                            width='90%'
                            marginTop='20px'
                            fontSize='30px'
                            height='50px'
                            onPress={changeBidValue}
                            isDisabled={isDisabled}
                            disabled={isDisabled}
                        >
                            BID
                        </Button>
                    </Row>
                </View>
            </View>
        </BottomSheet>
    );
};

export { ModalBottom };
