import React, {Component} from 'react';

import { Navbar, NavbarBrand , Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component {

  constructor(props){
    super(props);
  }

  renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

  renderComments(dishcomments) {
        const comment_details = dishcomments.map(comments => {
            return (
                <li key={comments.id} >
                    {comments.comment}
                    <br /><br />
                    -- {comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
                    <br /><br />
                </li>
            );
        });
        if (dishcomments != null)
          return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comment_details}
                </ul>
            </div>
        );
        else
            return(
                <div></div>
            );
    }



  render() 
  {
      const dishes_detail = this.props.dishes_detail;
      if (dishes_detail != null) 
      {
        return (
          <div className="row">
             <div  className="col-12 col-md-5 m-1">
                {this.renderDish(dishes_detail)}
              </div>

              <div className="col-12 col-md-5 m-1">
                {this.renderComments(dishes_detail.comments)}
              </div>
          </div>
          );
      }
      else 
      {
        return (<div></div>);
      }
  }
}

export default DishDetail;
