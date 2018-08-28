import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withStorySource } from '@storybook/addon-storysource'

import Button from './components/Button';
import Colors from './components/Colors';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

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
    import React from 'react'
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

