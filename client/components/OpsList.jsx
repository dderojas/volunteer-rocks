import React from 'react';
import Ops from './Ops.jsx';

import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Filter from './Filter.jsx';

//First render the props.opportunities view,
// if the user clicks the filter submit button on Filter.jsx, render the filter view.
class OpsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'opportunities'
    }
  }

  changeView(option) {
    if (this.state.view !== option) {
      this.setState({
        view: option
      });
    }
  }

  render() {
    console.log('Opps: ', this.props.opportunities);
    console.log('Num of pages: ', this.props.numOfPages);
    return (
      <div className="opportunity">
        <Container>
          <Row>
            <Col md="12">
              {this.props.opportunities.map(op => {
                return <Ops volunteerForOpp={this.props.volunteerForOpp} 
                opportunity={op} user={this.props.user} userId={this.props.userId} key={op._id}/>
              })}
            </Col>

            <Pagination aria-label="Opportunities navigation">
              {this.props.numOfPages.map(function (page) {
                return (
                  <PaginationItem onClick={() => this.props.passDownOpps(page + 1)}>
                    <PaginationLink>
                      {page + 1}
                    </PaginationLink>
                  </PaginationItem>
                );
              }.bind(this))}
            </Pagination>
          </Row>
        </Container>
      </div>
    );
  }
};

export default OpsList;