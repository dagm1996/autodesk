import React, { useEffect, useState } from 'react';
import AdskHeader from '../components/Adskheader';
import TableauViz from '../components/TableauViz';


const TableauDashboard = ({ val, pageName }) => {

    return (
      <div>
        <AdskHeader onHomepage={false} pageName={pageName} />
        <TableauViz val={val} />
      </div>
    );
};

export default TableauDashboard;