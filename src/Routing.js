import React from 'react'

import { Routes, Route} from 'react-router-dom'

const Routing = () => {
  return (
    <Routes>
    {/* Dashboard*/}
    <Route path="/" element="ECommerce" />
    <Route path="/ecommerce" element="ECommerce" />

    {/* Pages */}
    <Route path="/orders" element="Orders" />
    <Route path="/employees" element="Employees" />
    <Route path="/customers" element="Customers" />

    {/* Apps */}
    <Route path="/kanban" element="Kanban" />
    <Route path="/editor" element="Editor" />
    <Route path="/calendar" element="Calendar" />
    <Route path="/color-picker" element="ColorPicker" />

    {/* Charts */}
    <Route path="/line" element="Line" />
    <Route path="/area" element="Area" />
    <Route path="/bar" element="Bar" />
    <Route path="/pie" element="Pie" />
    <Route path="/financial" element="Financial" />
    <Route path="/color-mapping" element="ColorMapping" />
    <Route path="/pyramid" element="Pyramid" />
    <Route path="/stacked" element="Stack" />
  </Routes>
  )
}

export default Routing