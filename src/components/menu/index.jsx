import React from 'react';
//ui
import { MenuWrapper, ItemWrapper, Text } from './ui';
//////////////////////////////////////

const Menu = () => (
    <MenuWrapper>
        <ItemWrapper width={'100%'} background={'url(https://lh3.googleusercontent.com/BZr695cc2rCkswM7P2PZbfIdJFEgTrIkf7QbfT_QXGaMWuLadjYB6jwOd0SjCQUJGYS25OpM=w327-h273-no) no-repeat center center'}/>
        <ItemWrapper width={'80%'} borderTop={'1px solid white'} borderBottom={'1px solid white'}>
            <Text>Home</Text>
            <Text>Shop</Text>
            <Text>Social</Text>
            <Text>Contacts</Text>
        </ItemWrapper>
        <ItemWrapper width={'100%'}>
            
        </ItemWrapper>
    </MenuWrapper>
);

export default Menu;