import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {Grid, Image, Header,Button, Divider, Segment, Icon, Modal,Sticky} from 'semantic-ui-react'
import '../styles/DataPage.css'

function DataPage(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toSurvey() {
    props.history.push('/survey');
  }

  function onHomePress() {
    props.history.push('/Homepage');
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const noDataView =
      <div className='noData'>
        <Divider/>
        <Header as='h1' textAlign='center'>No Data Available</Header>
        <Divider/>
        <Segment text basic>
          <p>No data was found, if you would like to view data about yourself please take the survey</p>
        </Segment>
        <Button
            primary
            onClick={toSurvey}
        >
          To survey
        </Button>
      </div>;

  const home =
      <div className='homeSection'>
        <Divider/>
        <Sticky pushing= 'false' offset = {0} className='foo' pushing = "false">
          <Grid >
            <Grid.Row stretched>
              <Grid.Column centered stretched>
                <Modal open={modalIsOpen}  centered={true}
                       trigger={<Grid textAlign='center'><Button size = 'tiny' basic color="black" onClick={openModal}>
                         <Icon name='home'/> Home</Button>
                       </Grid>}>
                  <Modal.Header>
                    <Grid>
                      <Grid.Row centered>
                        If you return to the homepage, you will be signed out. Do you wish to
                        proceed?
                      </Grid.Row>
                    </Grid>
                  </Modal.Header>
                  <Modal.Content>
                    <Modal.Actions>
                      <Grid columns={2}>
                        <Grid.Row centered>
                          <Grid.Column>
                            <Button size = 'large' color='green' onClick={onHomePress}>
                              <Icon name='checkmark' color = 'black'/> <b className = "text">Yes</b>
                            </Button>
                          </Grid.Column>
                          <Button size = 'large' color='red' onClick={closeModal}>
                            <Icon name='remove' color = 'black'/> <b className = "text">No</b>
                          </Button>
                        </Grid.Row>
                      </Grid>
                    </Modal.Actions>
                  </Modal.Content>
                </Modal>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Sticky>
        </div>;
  if (props.user.age === null) {
    return (
        <div>{home}<div>
      {props.user.age ?
          null :
          noDataView
      }
    </div>
        </div>
    );

  } else {
    return (

        /*Other data contents*/


        <div>
          <div>{noDataView}</div>
        {home}
        </div>
    );
  }
}

export default DataPage;