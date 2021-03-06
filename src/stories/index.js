import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withStorySource } from '@storybook/addon-storysource'
import { withBackgrounds } from '@storybook/addon-backgrounds';

import Button from './components/Button';
import Colors from './components/Colors';
import Cards from './components/Cards';
import CardContent from './components/Cards/CardContent';
import CardHeader from './components/Cards/CardHeader';
import CardImage from './components/Cards/CardImage';
import Image from './components/Image';

import Column from './components/Grid/column';
import Columns from './components/Grid/columns';

import Notification from './components/Notification';

const style = { padding: '10px' };

storiesOf('Button', module)
  .addDecorator(withStorySource(`
    import React from 'react'
    import Button from './components/Button';

    <Button color="isPrimary" size="isLarge">Primary</Button>
    <Button color="isSecondary" size="isLarge">Secondary</Button>
    <Button color="isMarketing" size="isLarge">Marketing</Button>
    <Button color="isPrimary" size="isLarge">Large</Button>
    <Button color="isSecondary" size="isHalf">Half</Button>
    <Button color="isMarketing" size="isSmall">Small</Button>
    <Button color="isMarketingReverse" size="isSmall">Small</Button> `))
  .add('Primary', () => (
    <Button color="isPrimary" size="isLarge">Primary</Button>
  ))
  .add('Secondary', () => (
    <Button color="isSecondary" size="isLarge">Secondary</Button>
  ))
  .add('Marketing', () => (
    <Button color="isMarketing" size="isLarge">Marketing</Button>
  ))
  .add('Large', () => (
    <Button color="isPrimary" size="isLarge">Large</Button>
  ))
  .add('Half', () => (
    <Button color="isSecondary" size="isHalf">Half</Button>
  ))
  .add('Small', () => (
    <Button color="isMarketing" size="isSmall">Small</Button>
  ))
  .add('Reverse', () => (
    <Button color="isMarketingReverse" size="isSmall">Small</Button>
  ));

storiesOf('Color', module)
  .addDecorator(withStorySource(`
  import React from 'react';
  import Colors from './components/Colors';

  <Colors color="isColorOne">Colors</Colors>
  <Colors color="isColorTwo">Colors</Colors>
  <Colors color="isColorThree">Colors</Colors>
  <Colors color="isColorFour">Colors</Colors>
  <Colors color="isColorFive">Colors</Colors>
  <Colors color="isColorSix">Colors</Colors>
  <Colors color="isColorSeven">Colors</Colors>
  <Colors color="isColorEight">Colors</Colors>
  <Colors color="isColorNine">Colors</Colors>
  <Colors color="isColorTen">Colors</Colors>
  <Colors color="isColorEleven">Colors</Colors>
  <Colors color="isColorTwelve">Colors</Colors>
  <Colors color="isColorThirteen">Colors</Colors>
  <Colors color="isColorFourteen">Colors</Colors>
  `))
  .add('List', () => (
    <div className="bg">
      <Colors color="isColorOne">Colors</Colors>
      <Colors color="isColorTwo">Colors</Colors>
      <Colors color="isColorThree">Colors</Colors>
      <Colors color="isColorFour">Colors</Colors>
      <Colors color="isColorFive">Colors</Colors>
      <Colors color="isColorSix">Colors</Colors>
      <Colors color="isColorSeven">Colors</Colors>
      <Colors color="isColorEight">Colors</Colors>
      <Colors color="isColorNine">Colors</Colors>
      <Colors color="isColorTen">Colors</Colors>
      <Colors color="isColorEleven">Colors</Colors>
      <Colors color="isColorTwelve">Colors</Colors>
      <Colors color="isColorThirteen">Colors</Colors>
      <Colors color="isColorFourteen">Colors</Colors>
    </div>
  ))

storiesOf('Card', module)
  .addDecorator(withStorySource(`
    import React from 'react';
    import Cards from './components/Cards';
    import CardContent from './components/Cards/CardContent';
    import CardHeader from './components/Cards/CardHeader';
    import CardImage from './components/Cards/CardImage';
    import Image from './components/Image';

    <Cards>
      <CardHeader>
        <CardImage>
          <Image src="http://placehold.it/300x225" ratio="is300X225"/>
        </CardImage>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis 			mauris. <a href="#">#css</a> <a href="#">#responsive</a>
        <small>11:09 PM - 1 Jan 2016</small>
      </CardContent>
    </Cards>
  `))
  .add('Card', () => (
    <Fragment>
      <Cards>
        <CardHeader>
          <CardImage>
            <Image src="http://placehold.it/300x225" ratio="is4By3"/>
          </CardImage>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus nec iaculis mauris.
        </CardContent>
      </Cards>
    </Fragment>
  ))
storiesOf('Grid', module)
  .addDecorator(withStorySource(`
  import React from 'react';
  import Column from './components/Grid/column';
  import Columns from './components/Grid/columns';
  import Notification from './components/Notification';

  <Columns>
    <Column style={style}>
      <Notification>
        First column
      </Notification>  
    </Column>
    <Column style={style}>
      <Notification>
        Second column
      </Notification>  
    </Column>
    <Column style={style}>
      <Notification>
        Third column
      </Notification>  
    </Column>
    <Column style={style}>
      <Notification>
        Fourth column
      </Notification>  
    </Column>
  </Columns>
  `))
  .add('Basic', () => (
    <Fragment>
      <Columns>
        <Column style={style}>
          <Notification>
            First column
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Second column
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Third column
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Fourth column
          </Notification>  
        </Column>
      </Columns>
    </Fragment>
  ))
  .addDecorator(withStorySource(`
    <Columns>
      <Column size="isThreeQuarters" style={style}>
        <Notification>
          is-three-quarters
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification>
          Auto
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification>
          Auto
        </Notification>  
      </Column>
    </Columns>
    <Columns>
      <Column size="isTwoThirds" style={style}>
        <Notification>
          is-two-thirds
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification>
          Auto
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification>
          Auto
        </Notification>  
      </Column>
    </Columns> 
    <Columns>
      <Column size="isHalf" style={style}>
        <Notification>
          is-half
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification>
          Auto
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification>
          Auto
        </Notification>  
      </Column>
    </Columns>        
    <Columns>
      <Column size="isOneThird" style={style}>
        <Notification>
          is-one-third
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification>
          Auto
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification>
          Auto
        </Notification>  
      </Column>
    </Columns>       
    <Columns>
      <Column size="isOneQuarter" style={style}>
        <Notification>
          is-one-quarter
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification>
          Auto
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification>
          Auto
        </Notification>  
      </Column>
    </Columns>
  `))
  .add('Quarters', () => (
    <Fragment>
      <Columns>
        <Column size="isThreeQuarters" style={style}>
          <Notification>
            is-three-quarters
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Auto
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Auto
          </Notification>  
        </Column>
      </Columns>
      <Columns>
        <Column size="isTwoThirds" style={style}>
          <Notification>
            is-two-thirds
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Auto
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Auto
          </Notification>  
        </Column>
      </Columns> 
      <Columns>
        <Column size="isHalf" style={style}>
          <Notification>
            is-half
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Auto
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Auto
          </Notification>  
        </Column>
      </Columns>        
      <Columns>
        <Column size="isOneThird" style={style}>
          <Notification>
            is-one-third
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Auto
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Auto
          </Notification>  
        </Column>
      </Columns>       
      <Columns>
        <Column size="isOneQuarter" style={style}>
          <Notification>
            is-one-quarter
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Auto
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification>
            Auto
          </Notification>  
        </Column>
      </Columns>
      <Columns>
        <Column size="is2" style={style}>
          <Notification>
            2
          </Notification>
        </Column>
        <Column size="is4" style={style}>
          <Notification>
            4
          </Notification>
        </Column>
        <Column size="is1" style={style}>
          <Notification>
            1
          </Notification>
        </Column>
        <Column size="is5" style={style}>
          <Notification>
            5
          </Notification>
        </Column>
      </Columns>
      <Columns isMultiline>
        <Column size="is2" style={style}>
          <Notification color="isInfo">
            2
          </Notification>  
        </Column>
        <Column size="is10" style={style}>
          <Notification color="isWarning">
            10
          </Notification>  
        </Column>
        <Column size="is1" style={style}>
          <Notification color="isSuccess">
            1
          </Notification>  
        </Column>
        <Column size="is5" style={style}>
          <Notification color="isDanger">
            5
          </Notification>  
        </Column>
        <Column size="is6" style={style}>
          <Notification color="isPrimary">
            6
          </Notification>  
        </Column>
      </Columns>
    </Fragment>
  ))

