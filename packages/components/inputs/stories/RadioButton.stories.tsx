import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { RadioButton, RadioButtonProps } from '../src';
import { Flex } from '@contentful/f36-core';

export default {
  title: 'Form Elements/RadioButton',
  component: RadioButton,
  parameters: {
    propTypes: [RadioButton['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const basic = (args: RadioButtonProps) => <RadioButton {...args} />;

basic.args = {
  id: 'Checkbox',
  name: 'some name',
};

export const overview = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading as="h3">Radio button default</SectionHeading>
      </Flex>
      <RadioButton id="Checkbox" label="some label text" name="some-name" />
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading as="h3">Radio button checked</SectionHeading>
      </Flex>
      <RadioButton
        id="Checkbox"
        isChecked
        label="some label text"
        name="some-name"
      />
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading as="h3">Radio button disabled</SectionHeading>
      </Flex>
      <RadioButton
        id="Checkbox"
        label="some label text"
        isDisabled
        name="some-name"
      />
    </Flex>
  </>
);
