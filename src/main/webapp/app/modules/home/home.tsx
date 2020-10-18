import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Row>
      <Col md="9">
        <h2>Welcome, Chuyenns!</h2>
        <p className="lead">Thông tin sinh viên</p>
        {account && account.login ? (
          <div>
            <Alert color="success">User đăng nhập: {account.login}.</Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              <br />- Số thứ tự sinh viên: 02.
              <br />- Họ và tên: Nguyễn Sĩ Chuyền.
              <br />- Mã số sinh viên: AT130309
            </Alert>

            <Alert color="warning">
              <Link to="/account/register" className="alert-link">
                Đăng ký tài khoản
              </Link>
            </Alert>
          </div>
        )}
      </Col>
      <Col md="3" className="pad">
        <img style={{"height" : "100%", "width" : "100%"}} src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/121958132_1001018693706568_1558035180601945053_n.jpg?_nc_cat=104&amp;_nc_sid=ae9488&amp;_nc_ohc=tLi6_0OSX-oAX_qvTpM&amp;_nc_ht=scontent-hkg4-2.xx&amp;oh=ecdeae6821e3d6e460eb1cf7b0a25e1f&amp;oe=5FB33F66"/>
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
