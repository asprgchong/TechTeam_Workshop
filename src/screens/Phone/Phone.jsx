import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Phone = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="phone"
      style={{
        height:
          screenWidth < 744
            ? "721px"
            : screenWidth >= 744 && screenWidth < 1024
            ? "1439px"
            : screenWidth >= 1024 && screenWidth < 1471
            ? "1919px"
            : undefined,
        minHeight: screenWidth >= 1471 ? "100vh" : undefined,
        minWidth:
          screenWidth < 744
            ? "374px"
            : screenWidth >= 744 && screenWidth < 1024
            ? "744px"
            : screenWidth >= 1024 && screenWidth < 1471
            ? "1024px"
            : screenWidth >= 1471
            ? "1471px"
            : undefined,
      }}
    >
      <div
        className="frame"
        style={{
          height:
            screenWidth < 744
              ? "342px"
              : screenWidth >= 744 && screenWidth < 1024
              ? "683px"
              : screenWidth >= 1024 && screenWidth < 1471
              ? "911px"
              : screenWidth >= 1471
              ? "1215px"
              : undefined,
          overflow: screenWidth >= 744 && screenWidth < 1024 ? "hidden" : undefined,
          padding:
            screenWidth < 744
              ? "0px 0px 0px 37.5px"
              : screenWidth >= 744 && screenWidth < 1024
              ? "0px 0px 0px 75px"
              : screenWidth >= 1024 && screenWidth < 1471
              ? "0px 0px 0px 100px"
              : screenWidth >= 1471
              ? "0px 0px 0px 152px"
              : undefined,
        }}
      >
        <div
          className="div"
          style={{
            gap:
              screenWidth < 744
                ? "27.75px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "55.5px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "74px"
                : screenWidth >= 1471
                ? "128px"
                : undefined,
            overflow:
              (screenWidth >= 1024 && screenWidth < 1471) ||
              (screenWidth >= 744 && screenWidth < 1024) ||
              screenWidth < 744
                ? "hidden"
                : undefined,
            padding:
              screenWidth < 744
                ? "40.5px 0px 24.38px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "81px 0px 48.75px"
                : (screenWidth >= 1024 && screenWidth < 1471) || screenWidth >= 1471
                ? "108px 0px 65px"
                : undefined,
            width:
              screenWidth < 744
                ? "155.62px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "311.25px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "415px"
                : screenWidth >= 1471
                ? "652px"
                : undefined,
          }}
        >
          <div
            className="navbar"
            style={{
              gap:
                screenWidth < 744
                  ? "3.38px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "6.75px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "9px"
                  : screenWidth >= 1471
                  ? "12px"
                  : undefined,
            }}
          >
            <div
              className="project"
              style={{
                height:
                  screenWidth < 744
                    ? "13.21px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "26.43px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "35.24px"
                    : screenWidth >= 1471
                    ? "46.98px"
                    : undefined,
                width:
                  screenWidth < 744
                    ? "67.25px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "132.5px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "176px"
                    : screenWidth >= 1471
                    ? "234px"
                    : undefined,
              }}
            >
              <div
                className="overlap-group"
                style={{
                  height:
                    screenWidth < 744
                      ? "13px"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "26px"
                      : screenWidth >= 1024 && screenWidth < 1471
                      ? "35px"
                      : screenWidth >= 1471
                      ? "47px"
                      : undefined,
                  width:
                    screenWidth < 744
                      ? "65px"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "130px"
                      : screenWidth >= 1024 && screenWidth < 1471
                      ? "174px"
                      : screenWidth >= 1471
                      ? "232px"
                      : undefined,
                }}
              >
                <div
                  className="rectangle"
                  style={{
                    height:
                      screenWidth < 744
                        ? "11px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "22px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "29px"
                        : screenWidth >= 1471
                        ? "39px"
                        : undefined,
                    width:
                      screenWidth < 744
                        ? "65px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "130px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "174px"
                        : screenWidth >= 1471
                        ? "232px"
                        : undefined,
                  }}
                />
                <div
                  className="text-wrapper"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "8.7px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "17.4px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "23.2px"
                        : screenWidth >= 1471
                        ? "31px"
                        : undefined,
                    left:
                      screenWidth < 744
                        ? "0"
                        : (screenWidth >= 1024 && screenWidth < 1471) ||
                          screenWidth >= 1471 ||
                          (screenWidth >= 744 && screenWidth < 1024)
                        ? "1px"
                        : undefined,
                    top:
                      screenWidth < 744
                        ? "3px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "5px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "7px"
                        : screenWidth >= 1471
                        ? "9px"
                        : undefined,
                    width:
                      screenWidth < 744
                        ? "33px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "65px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "87px"
                        : screenWidth >= 1471
                        ? "116px"
                        : undefined,
                  }}
                >
                  projects
                </div>
              </div>
            </div>
            <div
              className="about"
              style={{
                height:
                  screenWidth < 744
                    ? "13.22px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "26.44px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "35.25px"
                    : screenWidth >= 1471
                    ? "47px"
                    : undefined,
                width:
                  screenWidth < 744
                    ? "67.25px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "132.5px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "176px"
                    : screenWidth >= 1471
                    ? "234px"
                    : undefined,
              }}
            >
              <div
                className="overlap"
                style={{
                  height:
                    screenWidth < 744
                      ? "13px"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "26px"
                      : screenWidth >= 1024 && screenWidth < 1471
                      ? "35px"
                      : screenWidth >= 1471
                      ? "47px"
                      : undefined,
                  width:
                    screenWidth < 744
                      ? "65px"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "130px"
                      : screenWidth >= 1024 && screenWidth < 1471
                      ? "174px"
                      : screenWidth >= 1471
                      ? "232px"
                      : undefined,
                }}
              >
                <div
                  className="rectangle-2"
                  style={{
                    height:
                      screenWidth < 744
                        ? "11px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "22px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "29px"
                        : screenWidth >= 1471
                        ? "39px"
                        : undefined,
                    width:
                      screenWidth < 744
                        ? "65px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "130px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "174px"
                        : screenWidth >= 1471
                        ? "232px"
                        : undefined,
                  }}
                />
                <div
                  className="text-wrapper-2"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "8.7px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "17.4px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "23.2px"
                        : screenWidth >= 1471
                        ? "31px"
                        : undefined,
                    top:
                      screenWidth < 744
                        ? "3px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "5px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "7px"
                        : screenWidth >= 1471
                        ? "9px"
                        : undefined,
                    width:
                      screenWidth < 744
                        ? "33px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "65px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "87px"
                        : screenWidth >= 1471
                        ? "116px"
                        : undefined,
                  }}
                >
                  about
                </div>
              </div>
            </div>
            <div
              className="contact"
              style={{
                height:
                  screenWidth < 744
                    ? "13.22px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "26.44px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "35.25px"
                    : screenWidth >= 1471
                    ? "47px"
                    : undefined,
                width:
                  screenWidth < 744
                    ? "67.25px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "132.5px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "176px"
                    : screenWidth >= 1471
                    ? "234px"
                    : undefined,
              }}
            >
              <div
                className="overlap-2"
                style={{
                  height:
                    screenWidth < 744
                      ? "13px"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "26px"
                      : screenWidth >= 1024 && screenWidth < 1471
                      ? "35px"
                      : screenWidth >= 1471
                      ? "47px"
                      : undefined,
                  width:
                    screenWidth < 744
                      ? "65px"
                      : screenWidth >= 744 && screenWidth < 1024
                      ? "130px"
                      : screenWidth >= 1024 && screenWidth < 1471
                      ? "174px"
                      : screenWidth >= 1471
                      ? "232px"
                      : undefined,
                }}
              >
                <div
                  className="rectangle-3"
                  style={{
                    height:
                      screenWidth < 744
                        ? "11px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "22px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "29px"
                        : screenWidth >= 1471
                        ? "39px"
                        : undefined,
                    width:
                      screenWidth < 744
                        ? "65px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "130px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "174px"
                        : screenWidth >= 1471
                        ? "232px"
                        : undefined,
                  }}
                />
                <div
                  className="text-wrapper-3"
                  style={{
                    fontSize:
                      screenWidth < 744
                        ? "8.7px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "17.4px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "23.2px"
                        : screenWidth >= 1471
                        ? "31px"
                        : undefined,
                    top:
                      screenWidth < 744
                        ? "3px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "5px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "7px"
                        : screenWidth >= 1471
                        ? "9px"
                        : undefined,
                    width:
                      screenWidth < 744
                        ? "33px"
                        : screenWidth >= 744 && screenWidth < 1024
                        ? "65px"
                        : screenWidth >= 1024 && screenWidth < 1471
                        ? "87px"
                        : screenWidth >= 1471
                        ? "116px"
                        : undefined,
                  }}
                >
                  contact
                </div>
              </div>
            </div>
          </div>
          <div
            className="this-is-geralyn"
            style={{
              fontSize:
                screenWidth < 744
                  ? "26.2px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "52.5px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "70px"
                  : screenWidth >= 1471
                  ? "109px"
                  : undefined,
              height:
                screenWidth < 744
                  ? "118.4px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "236.8px"
                  : (screenWidth >= 1024 && screenWidth < 1471) || screenWidth >= 1471
                  ? "315.73px"
                  : undefined,
              marginRight:
                screenWidth < 744
                  ? "-88.74px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "-177.49px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "-236.65px"
                  : undefined,
              width:
                screenWidth < 744
                  ? "244.37px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "488.74px"
                  : (screenWidth >= 1024 && screenWidth < 1471) || screenWidth >= 1471
                  ? "651.65px"
                  : undefined,
            }}
          >
            This
            <br />
            is
            <br />
            Geralyn.
          </div>
          <div
            className="skills"
            style={{
              height:
                screenWidth < 744
                  ? "18px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "36px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "48px"
                  : screenWidth >= 1471
                  ? "64px"
                  : undefined,
              width:
                screenWidth < 744
                  ? "87.75px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "175.5px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "234px"
                  : screenWidth >= 1471
                  ? "312px"
                  : undefined,
            }}
          >
            <img
              className="image"
              style={{
                height:
                  screenWidth < 744
                    ? "17px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "34px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "46px"
                    : screenWidth >= 1471
                    ? "61px"
                    : undefined,
                width:
                  screenWidth < 744
                    ? "17px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "34px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "46px"
                    : screenWidth >= 1471
                    ? "61px"
                    : undefined,
              }}
              alt="Image"
              src="https://cdn.animaapp.com/projects/64bb99496e0cd2d79ed938b0/releases/653ef90abb53e93f4cf40cef/img/image-1.png"
            />
            <img
              className="img"
              style={{
                height:
                  screenWidth < 744
                    ? "18px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "36px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "48px"
                    : screenWidth >= 1471
                    ? "64px"
                    : undefined,
                left:
                  screenWidth < 744
                    ? "29px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "58px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "77px"
                    : screenWidth >= 1471
                    ? "103px"
                    : undefined,
                width:
                  screenWidth < 744
                    ? "18px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "36px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "48px"
                    : screenWidth >= 1471
                    ? "64px"
                    : undefined,
              }}
              alt="Image"
              src="https://cdn.animaapp.com/projects/64bb99496e0cd2d79ed938b0/releases/653ef90abb53e93f4cf40cef/img/image-2.png"
            />
            <img
              className="php-logo-png"
              style={{
                height:
                  screenWidth < 744
                    ? "15px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "30px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "40px"
                    : screenWidth >= 1471
                    ? "54px"
                    : undefined,
                left:
                  screenWidth < 744
                    ? "59px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "118px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "157px"
                    : screenWidth >= 1471
                    ? "209px"
                    : undefined,
                top:
                  screenWidth < 744
                    ? "2px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "3px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "4px"
                    : screenWidth >= 1471
                    ? "6px"
                    : undefined,
                width:
                  screenWidth < 744
                    ? "29px"
                    : screenWidth >= 744 && screenWidth < 1024
                    ? "58px"
                    : screenWidth >= 1024 && screenWidth < 1471
                    ? "77px"
                    : screenWidth >= 1471
                    ? "103px"
                    : undefined,
              }}
              alt="Php logo png"
              src={
                (screenWidth >= 1024 && screenWidth < 1471) || screenWidth >= 1471
                  ? "https://cdn.animaapp.com/projects/64bb99496e0cd2d79ed938b0/releases/653ef90abb53e93f4cf40cef/img/php-1-logo-png-transparent-removebg-preview-1.png"
                  : undefined
              }
            />
          </div>
        </div>
        <div
          className="frame-wrapper"
          style={{
            alignSelf: screenWidth >= 1471 ? "stretch" : undefined,
            gap:
              screenWidth < 744
                ? "36px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "72px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "96px"
                : screenWidth >= 1471
                ? "128px"
                : undefined,
            height:
              screenWidth < 744
                ? "341.62px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "683.25px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "911px"
                : undefined,
            marginBottom: screenWidth >= 744 && screenWidth < 1024 ? "-0.25px" : undefined,
            padding:
              screenWidth < 744
                ? "0px 0px 0px 33.75px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "0px 0px 0px 67.5px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "0px 0px 0px 90px"
                : undefined,
          }}
        >
          <img
            className="frame-2"
            style={{
              height:
                screenWidth < 744
                  ? "341.62px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "683px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "911px"
                  : screenWidth >= 1471
                  ? "1215px"
                  : undefined,
              marginLeft:
                screenWidth < 744
                  ? "-22.75px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "-49.50px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "-34.00px"
                  : undefined,
              width:
                screenWidth < 744
                  ? "169.88px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "339.75px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "453px"
                  : screenWidth >= 1471
                  ? "604px"
                  : undefined,
            }}
            alt="Frame"
            src={
              screenWidth < 744
                ? "https://cdn.animaapp.com/projects/64bb99496e0cd2d79ed938b0/releases/6545aa383c5b141827294c13/img/frame-6-1-1@2x.png"
                : screenWidth >= 744 && screenWidth < 1024
                ? "https://cdn.animaapp.com/projects/64bb99496e0cd2d79ed938b0/releases/6545aa383c5b141827294c13/img/frame-6-1-2.png"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "https://cdn.animaapp.com/projects/64bb99496e0cd2d79ed938b0/releases/6545aa383c5b141827294c13/img/frame-6-1-3.png"
                : screenWidth >= 1471
                ? "https://cdn.animaapp.com/projects/64bb99496e0cd2d79ed938b0/releases/6545aa383c5b141827294c13/img/frame-6-1.png"
                : undefined
            }
          />
        </div>
      </div>
      <div
        className="frame-3"
        style={{
          gap:
            screenWidth < 744
              ? "24px"
              : screenWidth >= 744 && screenWidth < 1024
              ? "48px"
              : (screenWidth >= 1024 && screenWidth < 1471) || screenWidth >= 1471
              ? "64px"
              : undefined,
          height:
            screenWidth < 744
              ? "290px"
              : screenWidth >= 744 && screenWidth < 1024
              ? "579px"
              : screenWidth >= 1024 && screenWidth < 1471
              ? "772px"
              : screenWidth >= 1471
              ? "857px"
              : undefined,
          padding:
            screenWidth < 744
              ? "37.88px 57px 49.5px"
              : screenWidth >= 744 && screenWidth < 1024
              ? "75.75px 114px 99px"
              : (screenWidth >= 1024 && screenWidth < 1471) || screenWidth >= 1471
              ? "101px 152px 132px"
              : undefined,
        }}
      >
        <div
          className="project-title"
          style={{
            gap:
              screenWidth < 744
                ? "-56.53px 0px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "-113.06px 0px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "-150.75px 0px"
                : screenWidth >= 1471
                ? "-201px 0px"
                : undefined,
            marginLeft:
              screenWidth < 744
                ? "-29.05px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "-60.09px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "-64.12px"
                : undefined,
            marginRight:
              screenWidth < 744
                ? "-29.05px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "-60.09px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "-64.12px"
                : undefined,
            marginTop: screenWidth >= 1471 ? "-14.75px" : undefined,
            padding:
              screenWidth < 744
                ? "0px 155.81px 0px 0px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "0px 311.62px 0px 0px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "0px 415.5px 0px 0px"
                : screenWidth >= 1471
                ? "0px 554px 0px 0px"
                : undefined,
            width:
              screenWidth < 744
                ? "318.09px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "636.19px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "848.25px"
                : screenWidth >= 1471
                ? "1131px"
                : undefined,
          }}
        >
          <div
            className="header"
            style={{
              height:
                screenWidth < 744
                  ? "24.19px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "48.38px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "64.5px"
                  : screenWidth >= 1471
                  ? "86px"
                  : undefined,
              width:
                screenWidth < 744
                  ? "78.47px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "156.94px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "209.25px"
                  : screenWidth >= 1471
                  ? "279px"
                  : undefined,
            }}
          />
          <div
            className="text-wrapper-4"
            style={{
              fontSize:
                screenWidth < 744
                  ? "14.1px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "28.1px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "37.5px"
                  : screenWidth >= 1471
                  ? "50px"
                  : undefined,
              height:
                screenWidth < 744
                  ? "5.34px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "10.69px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "14.25px"
                  : screenWidth >= 1471
                  ? "19px"
                  : undefined,
              marginLeft:
                screenWidth < 744
                  ? "-56.53px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "-113.06px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "-150.75px"
                  : screenWidth >= 1471
                  ? "-201px"
                  : undefined,
              width:
                screenWidth < 744
                  ? "87.75px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "175.5px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "234px"
                  : screenWidth >= 1471
                  ? "312px"
                  : undefined,
            }}
          >
            Projects
          </div>
        </div>
        <div
          className="project-cards"
          style={{
            height:
              screenWidth < 744
                ? "141.61px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "283.21px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "377.62px"
                : screenWidth >= 1471
                ? "503.49px"
                : undefined,
            marginBottom: screenWidth >= 1471 ? "-14.75px" : undefined,
            marginLeft:
              screenWidth < 744
                ? "-29.33px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "-60.66px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "-64.88px"
                : undefined,
            marginRight:
              screenWidth < 744
                ? "-29.33px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "-60.66px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "-64.88px"
                : undefined,
            width:
              screenWidth < 744
                ? "318.66px"
                : screenWidth >= 744 && screenWidth < 1024
                ? "637.33px"
                : screenWidth >= 1024 && screenWidth < 1471
                ? "849.77px"
                : screenWidth >= 1471
                ? "1133.02px"
                : undefined,
          }}
        >
          <div
            className="rectangle-4"
            style={{
              height:
                screenWidth < 744
                  ? "142px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "283px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "378px"
                  : screenWidth >= 1471
                  ? "503px"
                  : undefined,
              width:
                screenWidth < 744
                  ? "93px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "187px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "249px"
                  : screenWidth >= 1471
                  ? "332px"
                  : undefined,
            }}
          />
          <div
            className="rectangle-5"
            style={{
              height:
                screenWidth < 744
                  ? "142px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "283px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "378px"
                  : screenWidth >= 1471
                  ? "503px"
                  : undefined,
              left:
                screenWidth < 744
                  ? "113px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "227px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "302px"
                  : screenWidth >= 1471
                  ? "403px"
                  : undefined,
              width:
                screenWidth < 744
                  ? "93px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "187px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "249px"
                  : screenWidth >= 1471
                  ? "332px"
                  : undefined,
            }}
          />
          <div
            className="rectangle-6"
            style={{
              height:
                screenWidth < 744
                  ? "142px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "283px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "378px"
                  : screenWidth >= 1471
                  ? "503px"
                  : undefined,
              left:
                screenWidth < 744
                  ? "225px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "451px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "601px"
                  : screenWidth >= 1471
                  ? "801px"
                  : undefined,
              width:
                screenWidth < 744
                  ? "93px"
                  : screenWidth >= 744 && screenWidth < 1024
                  ? "187px"
                  : screenWidth >= 1024 && screenWidth < 1471
                  ? "249px"
                  : screenWidth >= 1471
                  ? "332px"
                  : undefined,
            }}
          />
        </div>
      </div>
      <div
        className="frame-4"
        style={{
          flex: screenWidth >= 1471 ? "1" : undefined,
          flexGrow: screenWidth >= 1471 ? "1" : undefined,
          height:
            screenWidth < 744
              ? "89px"
              : screenWidth >= 744 && screenWidth < 1024
              ? "177px"
              : screenWidth >= 1024 && screenWidth < 1471
              ? "236px"
              : undefined,
        }}
      />
    </div>
  );
};
