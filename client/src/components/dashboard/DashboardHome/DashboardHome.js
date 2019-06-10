import React from "react";
import { Layout, List, Typography, Icon, Menu, Dropdown } from "antd/lib/index";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    background: white;
    flex: 1;
    margin: 1rem;
    padding: 1rem 2rem;
    & > div {
      max-width: 450px;
      margin: 0 auto;
    }
    .ant-list-header {
      border-bottom-width: 2px;
      margin-bottom: 2rem;
      h2 {
        margin-bottom: 0;
      }
    }
    li {
      border: none !important;
      &:nth-of-type(even) {
        a {
          color: ${props => props.theme.highlightColor};
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const StyledLink = styled.a`
  color: ${props => props.theme.secondaryColor};
`;

// const count = 3;
// const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

const DashboardHome = () => {
  // const [data, setData] = useState([]);
  // const [list, setList] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [initialLoading, setInitialLoading] = useState(false);
  //
  // useEffect(() => {
  //   getData(res => {
  //     setData(res.data.results);
  //     setList(res.data.results);
  //     setInitialLoading(false);
  //     console.log(res);
  //   });
  // }, []);
  //
  // const getData = callback => {
  //   axios.get(fakeDataUrl).then(res => callback(res));
  // };
  //
  // const onLoadMore = () => {
  //   setLoading(true);
  //   setList(
  //     data.concat(
  //       [...new Array(count)].map(() => ({ loading: true, name: {} }))
  //     )
  //   );
  //   getData(res => {
  //     const newData = data.concat(res.data.results);
  //     setData(newData);
  //     setList(newData);
  //     setLoading(false);
  //     // window.dispatchEvent(new Event("resize"));
  //   });
  // };
  //
  // const loadMore =
  //   !initialLoading && !loading ? (
  //     <div
  //       style={{
  //         textAlign: "center",
  //         marginTop: 12,
  //         height: 32,
  //         lineHeight: "32px"
  //       }}
  //     >
  //       <Button onClick={onLoadMore}>loading more</Button>
  //     </div>
  //   ) : null;

  const data1 = [
    {
      title: "Los Angeles"
    },
    {
      title: "Brooklyn"
    },
    {
      title: "Seattle"
    },
    {
      title: "Brisbane"
    },
    {
      title: "Manila"
    },
    {
      title: "Berlin"
    }
  ];

  const data2 = [
    {
      title: "Web Developers"
    },
    {
      title: "Travelers"
    },
    {
      title: "Photography"
    },
    {
      title: "Film Making"
    },
    {
      title: "Travelers"
    },
    {
      title: "Film Making"
    }
  ];

  const menu1 = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  const menu2 = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  const TitleOne = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Typography.Title level={2}>Join a Room</Typography.Title>
      <Dropdown overlay={menu1}>
        <StyledLink className="ant-dropdown-link" href="#">
          Most Popular <Icon type="down" />
        </StyledLink>
      </Dropdown>
    </div>
  );

  const FooterOne = () => (
    <Link to="/rooms">
      <a style={{ textAlign: "right", display: "block" }}>
        <Icon type="caret-right" style={{ marginRight: 5 }} />
        Show All Rooms
      </a>
    </Link>
  );

  const TitleTwo = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Typography.Title level={2}>Favorites</Typography.Title>
      <Dropdown overlay={menu2}>
        <a className="ant-dropdown-link" href="#">
          Sort By <Icon type="down" />
        </a>
      </Dropdown>
    </div>
  );

  const FooterTwo = () => (
    <Link to="/rooms">
      <a style={{ textAlign: "right", display: "block" }}>
        <Icon type="caret-right" style={{ marginRight: 5 }} />
        Show All Rooms
      </a>
    </Link>
  );

  return (
    <Layout.Content
      style={{
        padding: "2rem 1rem",
        marginTop: 64
      }}
    >
      <StyledListContainer>
        <List
          itemLayout="horizontal"
          dataSource={data1}
          header={<TitleOne />}
          footer={<FooterOne />}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link to="https://ant.design">
                    <a>{item.title}</a>
                  </Link>
                }
              />
              <div>1,214 online</div>
            </List.Item>
          )}
        />
        <List
          itemLayout="horizontal"
          dataSource={data2}
          header={<TitleTwo />}
          footer={<FooterTwo />}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link to="https://ant.design">
                    <a>{item.title}</a>
                  </Link>
                }
              />
              <div>1,214 online</div>
            </List.Item>
          )}
        />
      </StyledListContainer>
    </Layout.Content>
  );
};

export default DashboardHome;
