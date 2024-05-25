import React, { useEffect } from 'react';
import { useState } from 'react';
//logo test
import logo from './AI-logo.png';
import Login from '../LoginForm/Login';

//css của header
import "./header.css";
//import "./newcss.css";

//tập lệnh tương tác của danh mục và nav menu button
import headerHandler from './headerHandler';

function Header() {

  //sử dụng tập lệnh
  useEffect(() => {
    headerHandler();
  }, []);

  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <header role="banner">
      <div className="visme-menu v-subpixel-antialiased v-relative v-z-10 v-bg-white v-menu-fixed">
        <div className="v-menu-wrapper v-items-center xl:v-flex xl:v-py-0">
          <div className="v-header v-flex v-items-center v-justify-between">
            <a className="v-menu-logo v-flex v-relative v-z-20" href="/" title="Home"  target="_self" rel="follow">
              {/* Logo */}
              <img src={logo} alt="logo" style={{maxHeight:"65px"}}></img>

            </a>

            <div className="v-search-bar align-items-center d-flex v-hidden v-relative v-z-20">
           
              <div className="nav-search-bar">
                <input type="text" className="search-input" placeholder="Search..."/>
              </div>

            </div>
            
            <div className="v-flex v-items-center v-relative v-z-20">
              <a className="v-btn v-btn-primary v-btn-small v-relative v-z-10" href="#" rel="nofollow noopener" onclick="EWCTriggerPopup()" title="Sign Up Free">
                Sign Up Free </a>
              <button className="v-toggle xl:v-hidden v-flex v-items-center v-justify-center" type="button" title="Toggle Menu">
                
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 17 11" fill="none">
                  <path d="M17.3332 0H0.666504V1.66667H17.3332V0Z" fill="#3F5264" />
                  <path d="M17.3332 8.3335H0.666504V10.0002H17.3332V8.3335Z" fill="#3F5264" />
                  <path d="M17.3332 4.1665H0.666504V5.83317H17.3332V4.1665Z" fill="#3F5264" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                  <path d="M1.84436 0.666382L0.666504 1.84424L16.1553 17.333L17.3332 16.1552L1.84436 0.666382Z" fill="#3F5264" />
                  <path d="M16.1553 0.666462L0.666504 16.1553L1.84436 17.3331L17.3332 1.84432L16.1553 0.666462Z" fill="#3F5264" />
                </svg>

              </button>
            </div>

            

          </div>
          <nav className="v-nav v-justify-between v-flex-1 xl:v-flex">
            <ul className="v-nav-list v-items-center v-list-none v-mb-0 v-p-0 v-mt-3 xl:v-flex xl:v-mt-0">
              <li className="v-menu-item-create v-parent-menu-item v-mb-3 xl:v-mb-0 v-has-menu">
                <a className="v-parent-menu-link v-link v-relative v-z-10 v-flex v-items-center v-justify-between v-text-dark-2 v-py-2 xl:v-p-0 v-chevron-before v-chevron-after" href="#" title="Tutorial" rel="nofollow noopener">
                  Tutorial </a>
                <div className="v-megamenu" style={{visibility: 'hidden'}}>
                  <div className="v-megamenu-content">
                    <div className="v-row v-wide">
                      
                      {/**Special label */}
                      <div className="v-megamenu-section v-megamenu-section-primary v-flex v-col v-pt-3 xl:v-pt-0 xl:v-px-5">
                        <div className="v-megamenu-section-inner v-flex-1 v-p-3">
                          <div className="v-megamenu-heading v-hidden md:v-flex v-items-center">
                            <span className="v-megamenu-label v-pointer-events-none v-w-full v-flex v-items-center v-flex-1 v-text-dark-2 v-py-2 v-pl-2">
                              How to make </span>
                          </div>
                          <div className="v-megamenu-wrapper v-pt-0">
                            <ul className="v-megamenu-menu v-list-none v-mb-0 v-p-0 v-w-full v-flex-wrap" role="menu" tabIndex={0}>
                              <li className="v-megamenu-item md:v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/" title="Presentations" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-presentations.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Presentations</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Attract your listeners</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-documents.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Documents</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Visual
                                      docs that inform</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-charts-graphs.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Charts
                                        &amp; Graphs</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Bring
                                      your data to life</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-infographics.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Reports</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Share
                                      information visually</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-forms-surveys.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Forms
                                        &amp; Surveys</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Smart data collection</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-whiteboards.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Whiteboards</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Draw your idea</p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>
                      
                      {/**Main label */}
                      <div className="v-megamenu-section v-megamenu-section-middle v-col xl:v-pl-0 xl:v-pr-2">
                        <div className="v-megamenu-wrapper v-relative v-overflow-hidden">
                          {/**Index col 1 */}
                          <div className="v-col xl:v-px-3">
                            <div className="v-megamenu-tab v-chevron-before v-chevron-after v-mb-3 v-flex v-items-center v-flex-0-auto md:v-mb-0 md:v-pl-0 xl:v-cursor-default">
                              <span className="v-subpixel-antialiased v-flex-1 v-py-2">Popular tools</span>
                            </div>
                            <ul className="v-megamenu-tab-menu v-hidden v-list-none v-mb-0 md:v-flex md:v-pt-0" role="menu" tabIndex={0}>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  Documents Convert Tool</a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  Presentation Maker</a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  Chart Maker</a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  Document Creator </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  Flowchart Maker </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  Report Maker </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/"  target="_self" rel="follow">
                                  White Paper Design </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/"  target="_self" rel="follow">
                                  Animation &amp; Assets </a>
                              </li>
                            </ul>
                          </div>

                          {/**Index col 2 */}
                          <div className="v-col xl:v-px-3">
                            <a className="v-megamenu-tab v-chevron-before v-chevron-after v-mb-3 v-flex v-items-center v-flex-0-auto md:v-mb-0 md:v-pl-0" href="/" title="AI Tool"  target="_self" rel="follow">
                              <span className="v-subpixel-antialiased v-flex-1 v-py-2">AI Tools</span>
                            </a>
                            <ul className="v-megamenu-tab-menu v-hidden v-list-none v-mb-0 md:v-flex md:v-pt-0" role="menu" tabIndex={0}>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  AI Image Generator</a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  AI Presentation Maker </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  AI Document Reader </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  AI PDF Analysis</a>
                              </li>
                            </ul>
                          </div>

                          {/**Index col 3 */}
                          <div className="v-col xl:v-px-3">
                            <div className="v-megamenu-tab v-chevron-before v-chevron-after v-mb-3 v-flex v-items-center v-flex-0-auto md:v-mb-0 md:v-pl-0 xl:v-cursor-default">
                              <span className="v-subpixel-antialiased v-flex-1 v-py-2">Asset Resources</span>
                            </div>
                            <ul className="v-megamenu-tab-menu v-hidden v-list-none v-mb-0 md:v-flex md:v-pt-0" role="menu" tabIndex={0}>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  SVG Icons</a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  Template Photo </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  Sample People Video </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/" target="_self" rel="follow">
                                  GIF </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/**What new */}
                      <div className="v-megamenu-section v-megamenu-section-secondary v-col xl:v-px-5 md:v-pt-3">
                        <div className="v-megamenu-heading v-flex v-items-center">
                          <span className="v-megamenu-label v-chevron-before v-w-full v-flex v-items-center v-flex-1 v-py-2 lg:v-pl-2">
                            What's New </span>
                        </div>
                        <div className="v-megamenu-wrapper v-hidden md:v-block">
                          <a className="v-megamenu-grid-item-link v-block v-relative v-overflow-hidden v-text-dark-3" href="/" title="What's new" target="_self" rel="follow">
                            
                            <div className="v-megamenu-grid-item-thumbnail-wrapper">
                              <div className="v-megamenu-grid-item-thumbnail v-thumb v-abs v-w-full v-h-full skip-lazy" data-thumb="https://cdn.winningedgeinvestments.com/resources/2021/01/04/Week-In-Review-%252b-Special-Podcast-1609761177.png" />
                            </div>
                            
                            <div className="v-megamenu-grid-item-details v-py-3">
                              <p className="v-megamenu-grid-item-title v-mb-3 v-text-dark-2 v-subpixel-antialiased">
                                Updates new Template , Sample and courses </p>
                              <p className="v-megamenu-grid-item-title v-mb-0 v-text-sky v-underline v-underline-offset-2">
                                See more </p>
                            </div>
                            

                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </li>

              <li className="v-menu-item-solutions v-parent-menu-item v-mb-3 xl:v-mb-0 v-has-menu">
                <a className="v-parent-menu-link v-link v-relative v-z-10 v-flex v-items-center v-justify-between v-text-dark-2 v-py-2 xl:v-p-0 v-chevron-before v-chevron-after" href="#" title="Solutions" rel="nofollow noopener">
                Exercises </a>
                <div className="v-megamenu" style={{visibility: 'hidden'}}>
                  <div className="v-megamenu-content">
                    <div className="v-row v-half">
                      <div className="v-megamenu-section v-megamenu-section-primary v-flex v-col v-pt-3 xl:v-pt-0 xl:v-px-5">
                        {/**Special lable */}
                        <div className="v-megamenu-section-inner v-flex-1 v-p-3">
                          <div className="v-megamenu-heading v-hidden md:v-flex v-items-center">
                            <span className="v-megamenu-label v-pointer-events-none v-w-full v-flex v-items-center v-flex-1 v-text-dark-2 v-py-2 v-pl-2">
                              Language </span>
                          </div>
                          <div className="v-megamenu-wrapper v-pt-0">
                            <ul className="v-megamenu-menu v-list-none v-mb-0 v-p-0 v-w-full v-flex-wrap" role="menu" tabIndex={0}>
                              <li className="v-megamenu-item md:v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://img.icons8.com/nolan/64/java-coffee-cup-logo.png"/>
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">OOP Programing</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Make an app with java</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://img.icons8.com/nolan/64/node-js.png"/>
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Back-end Develop</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Create function and more</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://img.icons8.com/nolan/64/react-native.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Web Design</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Visualize your beautiful web</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://img.icons8.com/nolan/64/c-plus-plus-logo.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Basic Programing</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">From basic to advanced</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://img.icons8.com/nolan/64/json.png"/>
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Data Structure</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Description and data definition</p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>

                      <div className="v-megamenu-section v-megamenu-section-middle v-col xl:v-pl-0 xl:v-pr-4">
                        <div className="v-megamenu-wrapper v-relative v-overflow-hidden">

                          <div className="v-col xl:v-px-4">
                            <div className="v-megamenu-tab v-chevron-before v-chevron-after v-mb-3 v-flex v-items-center v-flex-0-auto md:v-mb-0 md:v-pl-0 xl:v-cursor-default">
                              <span className="v-subpixel-antialiased v-flex-1 v-py-2">Fields</span>
                            </div>
                            <ul className="v-megamenu-tab-menu v-hidden v-list-none v-mb-0 md:v-flex md:v-pt-0" role="menu" tabIndex={0}>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/"  target="_self" rel="follow">
                                  Marketing &amp; Media </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/"  target="_self" rel="follow">
                                  Technology </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/"  target="_self" rel="follow">
                                  Manager </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/"  target="_self" rel="follow">
                                  Healthcare </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/"  target="_self" rel="follow">
                                  Consumer Goods </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/"  target="_self" rel="follow">
                                  Public Sector </a>
                              </li>
                            </ul>
                          </div>

                          <div className="v-col xl:v-px-4">
                            <div className="v-megamenu-tab v-chevron-before v-chevron-after v-mb-3 v-flex v-items-center v-flex-0-auto md:v-mb-0 md:v-pl-0 xl:v-cursor-default">
                              <span className="v-subpixel-antialiased v-flex-1 v-py-2">Position</span>
                            </div>
                            <ul className="v-megamenu-tab-menu v-hidden v-list-none v-mb-0 md:v-flex md:v-pt-0" role="menu" tabIndex={0}>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/"  target="_self" rel="follow">
                                  Product &amp; Project Manager </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/"  target="_self" rel="follow">
                                  Training &amp; Development </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/"  target="_self" rel="follow">
                                  Data &amp; Analytics </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="/"  target="_self" rel="follow">
                                  AI Engineer </a>
                              </li>
                            </ul>
                          </div>

                        </div>
                      </div>

                      <div className="v-megamenu-section v-megamenu-section-secondary v-col xl:v-px-5 md:v-pt-3">
                        <div className="v-megamenu-heading v-flex v-items-center">
                          <span className="v-megamenu-label v-chevron-before v-w-full v-flex v-items-center v-flex-1 v-py-2 lg:v-pl-2">
                            Use cases </span>
                        </div>
                        <div className="v-megamenu-wrapper v-hidden md:v-block">
                          <ul className="v-megamenu-menu v-megamenu-menu-alt v-w-full v-list-none v-mb-0 v-p-0 md:v-flex v-flex-wrap" role="menu" tabIndex={0}>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="/"  target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-all-in-one.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">All-in-One
                                  Content Creation</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="/"  target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-presentations.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Presentations</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="/"  target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-interactive-content.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Interactive
                                  Content</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="/"  target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-team-collaboration.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Team
                                  Collaboration</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="/"  target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-reports.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Reports
                                  &amp; Strategic Planning</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="/"  target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-analytics.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Analytics
                                  &amp; Data Visualization</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="/"  target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-governance.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Conservation Skill</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="/"  target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-project-management.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Project
                                  Management</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="/"  target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-team-meetings.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Team
                                  Meetings</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="/"  target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-events.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Events,
                                  Workshops, Conferences</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="/"  target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-diagram.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Diagram
                                  &amp; Mapping</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="/"  target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-plan.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Plan
                                  &amp; Schedule Content</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </li>
              <li className="v-menu-item-templates v-parent-menu-item v-mb-3 xl:v-mb-0 v-has-menu">
                <a className="v-parent-menu-link v-link v-relative v-z-10 v-flex v-items-center v-justify-between v-text-dark-2 v-py-2 xl:v-p-0 v-chevron-before v-chevron-after" href="#" title="Templates" rel="nofollow noopener">
                  Templates </a>
                <div className="v-megamenu" style={{visibility: 'hidden'}}>
                  <div className="v-megamenu-content">
                    <div className="v-row v-full">
                      <div className="v-megamenu-section v-megamenu-section-primary v-flex v-col v-pt-3 xl:v-pt-0 xl:v-px-5">
                        <div className="v-megamenu-section-inner v-flex-1 v-p-3">
                          <div className="v-megamenu-heading v-hidden md:v-flex v-items-center">
                            <span className="v-megamenu-label v-pointer-events-none v-w-full v-flex v-items-center v-flex-1 v-text-dark-2 v-py-2 v-pl-2">
                              Templates </span>
                            <a className="v-link v-morelink v-hidden xl:v-block v-flex-0-auto v-text-sm v-subpixel-antialiased" href="/" title="View All"  target="_self" rel="follow">
                              View All </a>
                          </div>
                          <div className="v-megamenu-wrapper v-pt-0">
                            <ul className="v-megamenu-menu v-list-none v-mb-0 v-p-0 v-w-full v-flex-wrap" role="menu" tabIndex={0}>
                              <li className="v-megamenu-item md:v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-presentations.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Presentations</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">1000+
                                      layouts and themes</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-infographics.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Infographics</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Find
                                      the right format for your information</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-documents.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Documents</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Templates
                                      for every document</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-charts.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Chart
                                        &amp; Maps</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Get
                                      data visualization ideas</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-forms.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Forms
                                        &amp; Surveys</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Templates
                                      for every business document</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-reports.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Reports</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Beautiful
                                      visual report templates</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-proposals.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Proposals</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Professional
                                      proposal templates</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-one-pagers.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">One
                                        Pagers</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Summarize
                                      complex information in one page</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-whiteboards.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Whiteboards</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Templates
                                      to brainstorm, plan and design</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-social.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Social
                                        Media Graphics</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Browse
                                      templates for every platform</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-training-manuals.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Training
                                        Manuals</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Professional
                                      templates for training manuals</p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="v-menu-item-examples v-parent-menu-item v-mb-3 xl:v-mb-0 v-has-menu">
                <a className="v-parent-menu-link v-link v-relative v-z-10 v-flex v-items-center v-justify-between v-text-dark-2 v-py-2 xl:v-p-0 v-chevron-before v-chevron-after" href="#" title="Examples" rel="nofollow noopener">
                  Examples </a>
                <div className="v-megamenu" style={{visibility: 'hidden'}}>
                  <div className="v-megamenu-content">
                    <div className="v-row v-large">
                      <div className="v-megamenu-section v-megamenu-section-grid v-col v-pt-3 xl:v-pt-0 xl:v-px-5">
                        <div className="v-megamenu-section-inner v-flex-1 v-p-3">
                          <div className="v-megamenu-heading v-hidden md:v-flex v-items-center">
                            <span className="v-megamenu-label v-pointer-events-none v-w-full v-flex v-items-center v-flex-1 v-py-2 xl:v-pl-2">
                              Case Studies </span>
                            <a className="v-link v-morelink v-hidden xl:v-block v-flex-0-auto v-text-sm v-subpixel-antialiased" href="/" title="View All"  target="_self" rel="follow">
                              View All </a>
                          </div>
                          <div className="v-megamenu-wrapper v-pt-0 xl:v-px-0">
                            <ul className="v-megamenu-menu v-megamenu-grid-menu v-flex v-list-none v-mb-0" role="menu" tabIndex={0}>

                              <li className="v-megamenu-grid-item md:v-mt-3">
                                <a className="v-megamenu-grid-item-link v-block v-relative v-overflow-hidden v-h-full" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-grid-item-thumbnail-wrapper">
                                    <div className="v-megamenu-grid-item-thumbnail v-thumb v-abs v-w-full v-h-full skip-lazy" data-thumb="https://www.forbesindia.com/media/images/2021/Mar/img_156501_designthinkings.jpg" />
                                  </div>
                                  <div className="v-megamenu-grid-item-details v-py-3">
                                    <p className="v-megamenu-grid-item-title v-mb-0 v-text-dark-2 v-subpixel-antialiased">
                                    Refer to the popular &amp; potential models in entrepreneurship and innovation
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-grid-item md:v-mt-3">
                                <a className="v-megamenu-grid-item-link v-block v-relative v-overflow-hidden v-h-full" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-grid-item-thumbnail-wrapper">
                                    <div className="v-megamenu-grid-item-thumbnail v-thumb v-abs v-w-full v-h-full skip-lazy" data-thumb="https://i.ytimg.com/vi/Vfw47vL2sbQ/maxresdefault.jpg" />
                                  </div>
                                  <div className="v-megamenu-grid-item-details v-py-3">
                                    <p className="v-megamenu-grid-item-title v-mb-0 v-text-dark-2 v-subpixel-antialiased">
                                      Let's make an simple chat app by using socket &amp; TCP/IP </p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-grid-item md:v-mt-3">
                                <a className="v-megamenu-grid-item-link v-block v-relative v-overflow-hidden v-h-full" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-grid-item-thumbnail-wrapper">
                                    <div className="v-megamenu-grid-item-thumbnail v-thumb v-abs v-w-full v-h-full skip-lazy" data-thumb="https://i.ytimg.com/vi/D48Gx2ckxpE/maxresdefault.jpg" />
                                  </div>
                                  <div className="v-megamenu-grid-item-details v-py-3">
                                    <p className="v-megamenu-grid-item-title v-mb-0 v-text-dark-2 v-subpixel-antialiased">
                                      Start design with React Native</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-grid-item md:v-mt-3">
                                <a className="v-megamenu-grid-item-link v-block v-relative v-overflow-hidden v-h-full" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-grid-item-thumbnail-wrapper">
                                    <div className="v-megamenu-grid-item-thumbnail v-thumb v-abs v-w-full v-h-full skip-lazy" data-thumb="https://developer-blogs.nvidia.com/wp-content/uploads/2023/02/monitor-data-train-deploy-graphic.jpg" />
                                  </div>
                                  <div className="v-megamenu-grid-item-details v-py-3">
                                    <p className="v-megamenu-grid-item-title v-mb-0 v-text-dark-2 v-subpixel-antialiased">
                                      How to run an AI model with your computer </p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-grid-item md:v-mt-3">
                                <a className="v-megamenu-grid-item-link v-block v-relative v-overflow-hidden v-h-full" href="/"  target="_self" rel="follow">
                                  <div className="v-megamenu-grid-item-thumbnail-wrapper">
                                    <div className="v-megamenu-grid-item-thumbnail v-thumb v-abs v-w-full v-h-full skip-lazy" data-thumb="https://winbuzzer.com/wp-content/uploads/2021/07/GitHub-Copilot-Open-AI-Microsoft.jpg" />
                                  </div>
                                  <div className="v-megamenu-grid-item-details v-py-3">
                                    <p className="v-megamenu-grid-item-title v-mb-0 v-text-dark-2 v-subpixel-antialiased">
                                    Programming 30% faster with GitHub Copilot</p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="v-actions v-flex v-items-center v-list-none v-mb-0 v-z-10 v-flex-0-auto xl:v-border-none xl:v-m-0 xl:v-p-0" tabIndex={0}>
        <li className="v-action v-action-search v-flex-1 v-flex-basis-0 v-hidden xl:v-flex-0-auto xl:v-flex">
          <a id="search-button" className="v-link search-button" href="#" rel="nofollow noopener" title="Search" onClick={toggleSearch}>
            <svg style={{ transform: 'translateY(2px)' }} width={24} height={24} version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2 s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3 s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3 c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z" />
            </svg>
          </a>
        </li>
        {/* Other menu items */}
        <li className="v-action v-action-login v-flex-1 v-flex-basis-0 v-flex xl:v-flex-0-auto">
                <a className="v-action-btn v-btn v-flex-1 v-relative v-z-10" href="Login" target="_blank" rel="nofollow noopener" title="Login" >
                  Login </a>
              </li>
              <li className="v-action v-action-sales v-flex-1 v-flex-basis-0 v-flex xl:v-flex-0-auto" style={{display: 'none'}}>
                <a className="v-action-btn v-btn v-btn-secondary v-flex-1 v-relative v-z-10" href="/"  target="_self" rel="follow">
                  Request a Demo </a>
              </li>
              <li className="v-action v-action-signup v-flex-full v-flex v-mt-4 sm:v-hidden xl:v-mt-0 xl:v-flex-0-auto xl:v-inline-block xl:v-flex-auto">
                <a className="v-action-btn v-btn v-btn-primary v-flex-1 v-relative v-z-10" href="#" rel="nofollow noopener" onclick="EWCTriggerPopup();return false" title="Sign Up Free">
                  Sign Up Free</a>
              </li>
      </ul>
      {searchVisible && (
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Search..." autoFocus="true"/>
          <button className="close-button" onClick={toggleSearch}>
            <svg width={24} height={24} viewBox="0 0 24 24">
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95 1.414-1.414z" />
            </svg>
          </button>
        </div>
      )}
          </nav>
        </div>
      </div>

    </header>
  );
}

export default Header;