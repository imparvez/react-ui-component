import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withStorySource } from '@storybook/addon-storysource'

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

  <Colors color="isColorOne" />
  <Colors color="isColorTwo" />
  <Colors color="isColorThree" />
  <Colors color="isColorFour" />
  <Colors color="isColorOne" />
  <Colors color="isColorTwo" />
  <Colors color="isColorThree" />
  <Colors color="isColorFour" />
  <Colors color="isColorFive" />
  <Colors color="isColorSix" />
  <Colors color="isColorSeven" />
  <Colors color="isColorEight" />
  <Colors color="isColorNine" />
  <Colors color="isColorTen" />
  <Colors color="isColorEleven" />
  <Colors color="isColorTwelve" />
  <Colors color="isColorThirteen" />
  <Colors color="isColorFourteen" />
  `))
  .add('List', () => (
    <Fragment>
      <Colors color="isColorOne" />
      <Colors color="isColorTwo" />
      <Colors color="isColorThree" />
      <Colors color="isColorFour" />
      <Colors color="isColorFive" />
      <Colors color="isColorSix" />
      <Colors color="isColorSeven" />
      <Colors color="isColorEight" />
      <Colors color="isColorNine" />
      <Colors color="isColorTen" />
      <Colors color="isColorEleven" />
      <Colors color="isColorTwelve" />
      <Colors color="isColorThirteen" />
      <Colors color="isColorFourteen" />
    </Fragment>
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
      <Notification color="isInfo">
        First column
      </Notification>  
    </Column>
    <Column style={style}>
      <Notification color="isSuccess">
        Second column
      </Notification>  
    </Column>
    <Column style={style}>
      <Notification color="isWarning">
        Third column
      </Notification>  
    </Column>
    <Column style={style}>
      <Notification color="isDanger">
        Fourth column
      </Notification>  
    </Column>
  </Columns>
  `))
  .add('Basic', () => (
    <Fragment>
      <Columns>
        <Column style={style}>
          <Notification color="isInfo">
            First column
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification color="isSuccess">
            Second column
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification color="isWarning">
            Third column
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification color="isDanger">
            Fourth column
          </Notification>  
        </Column>
      </Columns>
    </Fragment>
  ))
  .add('Quarters', () => (
    <Fragment>
    <Columns>
      <Column size="isThreeQuarters" style={style}>
        <Notification color="isInfo">
          is-three-quarters
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification color="isWarning">
          Auto
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification color="isDanger">
          Auto
        </Notification>  
      </Column>
    </Columns>
    <Columns>
      <Column size="isTwoThirds" style={style}>
        <Notification color="isInfo">
          is-two-thirds
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification color="isWarning">
          Auto
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification color="isDanger">
          Auto
        </Notification>  
      </Column>
    </Columns> 
    <Columns>
      <Column size="isHalf" style={style}>
        <Notification color="isInfo">
          is-half
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification color="isWarning">
          Auto
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification color="isDanger">
          Auto
        </Notification>  
      </Column>
    </Columns>        
    <Columns>
      <Column size="isOneThird" style={style}>
        <Notification color="isInfo">
          is-one-third
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification color="isWarning">
          Auto
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification color="isDanger">
          Auto
        </Notification>  
      </Column>
    </Columns>       
    <Columns>
      <Column size="isOneQuarter" style={style}>
        <Notification color="isInfo">
          is-one-quarter
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification color="isWarning">
          Auto
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification color="isDanger">
          Auto
        </Notification>  
      </Column>
    </Columns>
    </Fragment>
  ))

