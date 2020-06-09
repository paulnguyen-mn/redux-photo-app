import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
  photoList: PropTypes.array,
};

PhotoList.defaultProps = {
  photoList: [],
};

function PhotoList(props) {
  const { photoList } = props;

  return (
    <Row>
      {photoList.map(photo => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard photo={photo} />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;