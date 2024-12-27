import React from 'react'

export const UILabel = ({
  tagCus = 'p',
  children,
  classCus = '',
  styleCus = {},
  forCus ='',
}) => {
  const Tag = tagCus;
  return<Tag
      htmlFor={forCus}
      className={classCus}
      style={styleCus}
    >
      {
        children
      }
    </Tag>
}
