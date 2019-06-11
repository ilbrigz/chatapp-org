import React from "react";
import { List, Typography, Icon, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import {
  StyledLink,
  StyledListContainer,
  LayoutContainer
} from "./DashboardHome.styles";
import { data2, data1, menu1Links, menu2Links } from "./data";
import CreateRoomForm from "./CreateRoomForm";

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

  const menu1 = (
    <Menu>
      {menu1Links.map((link, i) => (
        <Menu.Item key={i}>
          <a target="_blank" rel="noopener noreferrer" href={link.link}>
            {link.title}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );

  const menu2 = (
    <Menu>
      {menu2Links.map((link, i) => (
        <Menu.Item key={i}>
          <a target="_blank" rel="noopener noreferrer" href={link.link}>
            {link.title}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );

  const TableTitle = props => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexFlow: "row wrap"
      }}
    >
      <Typography.Title level={2}>{props.title}</Typography.Title>
      <Dropdown overlay={props.menu} trigger={["click"]}>
        <StyledLink className="ant-dropdown-link" href="#">
          {props.link} <Icon type="down" />
        </StyledLink>
      </Dropdown>
    </div>
  );

  const TableFooter = props => (
    <Link to={props.room}>
      <span style={{ textAlign: "right", display: "block" }}>
        <Icon type="caret-right" style={{ marginRight: 5 }} />
        {props.title}
      </span>
    </Link>
  );

  return (
    <LayoutContainer>
      <StyledListContainer>
        <List
          itemLayout="horizontal"
          dataSource={data1}
          header={
            <TableTitle title="Join a Room" menu={menu1} link="Most Popular" />
          }
          footer={<TableFooter room="/rooms" title="Show All Rooms" />}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link to="https://ant.design">
                    <span>{item.title}</span>
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
          header={<TableTitle title="Favourites" menu={menu2} link="Sort By" />}
          footer={<TableFooter room="/rooms" title="Show All Rooms" />}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link to="https://ant.design">
                    <span>{item.title}</span>
                  </Link>
                }
              />
              <div>1,214 online</div>
            </List.Item>
          )}
        />
      </StyledListContainer>
      <CreateRoomForm />
    </LayoutContainer>
  );
};

export default DashboardHome;
