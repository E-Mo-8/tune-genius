import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from "antd";
import { library } from "../helpers/albumList";

const { TabPane } = Tabs;

const Home = () => {
  return (
    <>
    <div>
      <p>&nbsp;</p>
    </div>
     <h1 className="featuredTitle">The world's first <br></br>P2P music streaming <br></br> platform</h1>
      <Tabs defaultActiveKey="1" centered>
              <TabPane tab="TRENDING" key="1">
                <div className="albums">
                  {library.map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
                      <img
                        src={e.image}
                        alt="bull"
                        style={{ width: "150px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.title}</p>
                    </Link>
                  ))}
                </div>
              </TabPane>
              <TabPane tab="CATEGORY" key="2">
                <h1 className="featuredTitle">Pop Music</h1>
                <div className="albums">
                  {library.slice(7, 13).map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
                      <img
                        src={e.image}
                        alt="bull"
                        style={{ width: "150px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.title}</p>
                    </Link>
                  ))}
                </div>
                <h1 className="featuredTitle">Top Hits</h1>
                <div className="albums">
                  {library.slice(5, 11).map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
                      <img
                        src={e.image}
                        alt="bull"
                        style={{ width: "150px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.title}</p>
                    </Link>
                  ))}
                </div>
                <h1 className="featuredTitle">Country</h1>
                <div className="albums">
                  {library.slice(0, 6).map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
                      <img
                        src={e.image}
                        alt="bull"
                        style={{ width: "150px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.title}</p>
                    </Link>
                  ))}
                </div>
                <h1 className="featuredTitle">Classics</h1>
                <div className="albums">
                  {library.slice(5, 11).map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
                      <img
                        src={e.image}
                        alt="bull"
                        style={{ width: "150px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.title}</p>
                    </Link>
                  ))}
                </div>
              </TabPane>
              <TabPane tab="NEW RELEASES" key="3">
                <h1 className="featuredTitle">Hot Off The Press</h1>
                <div className="albums">
                  {library.map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
                      <img
                        src={e.image}
                        alt="bull"
                        style={{ width: "150px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.title}</p>
                    </Link>
                  ))}
                </div>
              </TabPane>
            </Tabs>
           
    </>
  );
};

export default Home;
