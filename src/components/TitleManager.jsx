import React from "react";
import { Helmet } from 'react-helmet-async';

const TitleManager = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default TitleManager;
