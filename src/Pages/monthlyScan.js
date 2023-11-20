import React from 'react';
import Header from '../Components/Header';
import Description from '../Components/Description';
import SupportedVersions from '../Components/supportedVersions';

function MonthlyScanPage() {
  return (
    <div className="App">
        <Header />
        <Description />
        <SupportedVersions year={2023} month={10} />
    </div>
  );
}

export default MonthlyScanPage;
