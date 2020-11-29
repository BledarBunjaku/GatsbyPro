import React from 'react'
import Management from './Management'
import AllTogether from './AllTogether'
import Designer from './Designer'
import Developer from './Developer'
import { Tabs, Tab } from 'react-bootstrap'

function career() {



    return (

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="AllTogether" >
                <AllTogether />
            </Tab>
            <Tab eventKey="profile" title="Designer" >
                <Designer />
            </Tab>
            <Tab eventKey="contact" title="Developer" >
                <Developer />
            </Tab>
            <Tab eventKey="management" title="Management"  >
                <Management />
            </Tab>
        </Tabs>
    )



}

export default career 