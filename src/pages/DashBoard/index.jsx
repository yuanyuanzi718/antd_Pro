import React, { useEffect, useState } from 'react'
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import styles from './index.less'
import { connect } from 'dva'

function DashBoard (props) {
  const [dataObj, setdataObj] = useState({
    goods_count: 0,
    order_count: 0,
    users_count: 0,
  });

  useEffect(() => {
    const { dashBoard } = props
    setdataObj(dashBoard.dataObj)
  }, []);

  return (
    <div className={styles.site}>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="用户数"
              value={dataObj.goods_count}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="商品数"
              value={dataObj.order_count}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Idle"
              value={dataObj.users_count}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { dashBoard: state.dashBoard };
}
export default connect(mapStateToProps)(DashBoard)