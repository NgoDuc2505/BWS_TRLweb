import React, { useEffect } from 'react';
import { useState } from 'react';
//logo test
import logo from './AI-logo.png';

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
                <a className="v-parent-menu-link v-link v-relative v-z-10 v-flex v-items-center v-justify-between v-text-dark-2 v-py-2 xl:v-p-0 v-chevron-before v-chevron-after" href="#" title="Create" rel="nofollow noopener">
                  Create </a>
                <div className="v-megamenu" style={{visibility: 'hidden'}}>
                  <div className="v-megamenu-content">
                    <div className="v-row v-wide">
                      
                      <div className="v-megamenu-section v-megamenu-section-primary v-flex v-col v-pt-3 xl:v-pt-0 xl:v-px-5">
                        <div className="v-megamenu-section-inner v-flex-1 v-p-3">
                          <div className="v-megamenu-heading v-hidden md:v-flex v-items-center">
                            <span className="v-megamenu-label v-pointer-events-none v-w-full v-flex v-items-center v-flex-1 v-text-dark-2 v-py-2 v-pl-2">
                              Products </span>
                          </div>
                          <div className="v-megamenu-wrapper v-pt-0">
                            <ul className="v-megamenu-menu v-list-none v-mb-0 v-p-0 v-w-full v-flex-wrap" role="menu" tabIndex={0}>
                              <li className="v-megamenu-item md:v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/presentation-software/" title="Presentations" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-presentations.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Presentations</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Keep
                                      your audience engaged</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/professional-document-creator/" title="Documents" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-documents.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Documents</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Visual
                                      docs that inform</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/graph-maker/" title="Charts & Graphs" data-wpel-link="internal" target="_self" rel="follow">
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
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/make-infographics/" title="Infographics" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-infographics.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Infographics</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Share
                                      information visually</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/form-builder/" title="Forms & Surveys" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-forms-surveys.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Forms
                                        &amp; Surveys</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Visual
                                      forms that convert</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/online-whiteboard/" title="Whiteboards" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-whiteboards.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Whiteboards</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Brainstorm,
                                      plan, and design</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/social-media-graphics/" title="Social Media Graphics" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-social-graphics.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Social
                                        Media Graphics</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Create
                                      scroll-stopping posts</p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>

                      <div className="v-megamenu-section v-megamenu-section-middle v-col xl:v-pl-0 xl:v-pr-2">
                        <div className="v-megamenu-wrapper v-relative v-overflow-hidden">
                          <div className="v-col xl:v-px-3">
                            <div className="v-megamenu-tab v-chevron-before v-chevron-after v-mb-3 v-flex v-items-center v-flex-0-auto md:v-mb-0 md:v-pl-0 xl:v-cursor-default">
                              <span className="v-subpixel-antialiased v-flex-1 v-py-2">Design
                                Tools</span>
                            </div>
                            <ul className="v-megamenu-tab-menu v-hidden v-list-none v-mb-0 md:v-flex md:v-pt-0" role="menu" tabIndex={0}>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/video-maker/" title="Video Maker" data-wpel-link="internal" target="_self" rel="follow">
                                  Video Maker </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/timeline-maker/" title="Timeline Maker" data-wpel-link="internal" target="_self" rel="follow">
                                  Timeline Maker </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/ebook-creator/" title="eBook Creator" data-wpel-link="internal" target="_self" rel="follow">
                                  eBook Creator </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/gif-maker/" title="GIF Maker" data-wpel-link="internal" target="_self" rel="follow">
                                  GIF Maker </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/flowchart-maker/" title="Flowchart Maker" data-wpel-link="internal" target="_self" rel="follow">
                                  Flowchart Maker </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/report-maker/" title="Report Maker" data-wpel-link="internal" target="_self" rel="follow">
                                  Report Maker </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/white-paper-design/" title="White Paper Design" data-wpel-link="internal" target="_self" rel="follow">
                                  White Paper Design </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/newsletter-maker/" title="Newsletter Maker" data-wpel-link="internal" target="_self" rel="follow">
                                  Newsletter Maker </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/animation-interactivity/" title="Animation & Interactivity" data-wpel-link="internal" target="_self" rel="follow">
                                  Animation &amp; Interactivity </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/flyer-maker/" title="Flyer Maker" data-wpel-link="internal" target="_self" rel="follow">
                                  Flyer Maker </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/create-printables/" title="Printables" data-wpel-link="internal" target="_self" rel="follow">
                                  Printables </a>
                              </li>
                            </ul>
                          </div>
                          <div className="v-col xl:v-px-3">
                            <a className="v-megamenu-tab v-chevron-before v-chevron-after v-mb-3 v-flex v-items-center v-flex-0-auto md:v-mb-0 md:v-pl-0" href="https://www.visme.co/visme-ai/" title="Visme AI" data-wpel-link="internal" target="_self" rel="follow">
                              <span className="v-subpixel-antialiased v-flex-1 v-py-2">Visme
                                AI</span>
                            </a>
                            <ul className="v-megamenu-tab-menu v-hidden v-list-none v-mb-0 md:v-flex md:v-pt-0" role="menu" tabIndex={0}>
                              <li className="v-megamenu-tab-item v-mt-3 v-desktop-hidden">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/visme-ai/" title="About Visme AI" data-wpel-link="internal" target="_self" rel="follow">
                                  About Visme AI </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/ai-design-generator/" title="AI Designer" data-wpel-link="internal" target="_self" rel="follow">
                                  AI Designer </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/ai-presentation-maker/" title="AI Presentation Maker" data-wpel-link="internal" target="_self" rel="follow">
                                  AI Presentation Maker </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/ai-document-generator/" title="AI Document Generator" data-wpel-link="internal" target="_self" rel="follow">
                                  AI Document Generator </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/brand-design-tool/" title="AI Brand Design Tools" data-wpel-link="internal" target="_self" rel="follow">
                                  AI Brand Design Tools </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/ai-image-generator/" title="AI Image Generator" data-wpel-link="internal" target="_self" rel="follow">
                                  AI Image Generator </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/ai-text-generator/" title="AI Text Generator" data-wpel-link="internal" target="_self" rel="follow">
                                  AI Text Generator </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/ai-image-edit-tools/" title="AI Image Edit Tools" data-wpel-link="internal" target="_self" rel="follow">
                                  AI Image Edit Tools </a>
                              </li>
                            </ul>
                          </div>
                          <div className="v-col xl:v-px-3">
                            <div className="v-megamenu-tab v-chevron-before v-chevron-after v-mb-3 v-flex v-items-center v-flex-0-auto md:v-mb-0 md:v-pl-0 xl:v-cursor-default">
                              <span className="v-subpixel-antialiased v-flex-1 v-py-2">Graphics
                                &amp; Assets</span>
                            </div>
                            <ul className="v-megamenu-tab-menu v-hidden v-list-none v-mb-0 md:v-flex md:v-pt-0" role="menu" tabIndex={0}>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/data-visualization-tools/" title="Data Widgets" data-wpel-link="internal" target="_self" rel="follow">
                                  Data Widgets </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/high-resolution-images/" title="Photos" data-wpel-link="internal" target="_self" rel="follow">
                                  Photos </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/mockup-generator/" title="Mockups" data-wpel-link="internal" target="_self" rel="follow">
                                  Mockups </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/icon-finder/" title="Icons" data-wpel-link="internal" target="_self" rel="follow">
                                  Icons </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/3d-character-creator/" title="Animated Characters" data-wpel-link="internal" target="_self" rel="follow">
                                  Animated Characters </a>
                              </li>
                            </ul>
                          </div>
                          <div className="v-col xl:v-px-3">
                            <div className="v-megamenu-tab v-chevron-before v-chevron-after v-mb-3 v-flex v-items-center v-flex-0-auto md:v-mb-0 md:v-pl-0 xl:v-cursor-default">
                              <span className="v-subpixel-antialiased v-flex-1 v-py-2">More</span>
                            </div>
                            <ul className="v-megamenu-tab-menu v-hidden v-list-none v-mb-0 md:v-flex md:v-pt-0" role="menu" tabIndex={0}>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/brand-design-tool/" title="Brand Kit" data-wpel-link="internal" target="_self" rel="follow">
                                  Brand Kit </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/design-collaboration/" title="Collaboration" data-wpel-link="internal" target="_self" rel="follow">
                                  Collaboration </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/social-media-scheduler/" title="Social Scheduler" data-wpel-link="internal" target="_self" rel="follow">
                                  Social Scheduler </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/integrations/" title="Integrations" data-wpel-link="internal" target="_self" rel="follow">
                                  Integrations </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/presentation-recording-software/" title="Presenter Studio" data-wpel-link="internal" target="_self" rel="follow">
                                  Presenter Studio </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="v-megamenu-section v-megamenu-section-secondary v-col xl:v-px-5 md:v-pt-3">
                        <div className="v-megamenu-heading v-flex v-items-center">
                          <span className="v-megamenu-label v-chevron-before v-w-full v-flex v-items-center v-flex-1 v-py-2 lg:v-pl-2">
                            What's New </span>
                        </div>
                        <div className="v-megamenu-wrapper v-hidden md:v-block">
                          <a className="v-megamenu-grid-item-link v-block v-relative v-overflow-hidden v-text-dark-3" href="https://www.visme.co/whats-new/" title="New Releases in Visme" data-wpel-link="internal" target="_self" rel="follow">
                            
                            <div className="v-megamenu-grid-item-thumbnail-wrapper">
                              <div className="v-megamenu-grid-item-thumbnail v-thumb v-abs v-w-full v-h-full skip-lazy" data-thumb="https://www.visme.co/wp-content/uploads/2024/05/whats-new-cover-3d-character-left-pannel-1024x576.jpg" />
                            </div>
                            
                            <div className="v-megamenu-grid-item-details v-py-3">
                              <p className="v-megamenu-grid-item-title v-mb-3 v-text-dark-2 v-subpixel-antialiased">
                                Updates to Editing Navigation, Enhanced 3D
                                Characters, and More </p>
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
                  Solutions </a>
                <div className="v-megamenu" style={{visibility: 'hidden'}}>
                  <div className="v-megamenu-content">
                    <div className="v-row v-half">
                      <div className="v-megamenu-section v-megamenu-section-primary v-flex v-col v-pt-3 xl:v-pt-0 xl:v-px-5">
                        <div className="v-megamenu-section-inner v-flex-1 v-p-3">
                          <div className="v-megamenu-heading v-hidden md:v-flex v-items-center">
                            <span className="v-megamenu-label v-pointer-events-none v-w-full v-flex v-items-center v-flex-1 v-text-dark-2 v-py-2 v-pl-2">
                              Company size </span>
                          </div>
                          <div className="v-megamenu-wrapper v-pt-0">
                            <ul className="v-megamenu-menu v-list-none v-mb-0 v-p-0 v-w-full v-flex-wrap" role="menu" tabIndex={0}>
                              <li className="v-megamenu-item md:v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/teams/enterprise/" title="Enterprise" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-enterprise.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Enterprise</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Create
                                      visual content at scale</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/company/medium-business/" title="Midsize Business" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-medium-business.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Midsize
                                        Business</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Companies
                                      50-250 employees</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/company/small-business/" title="Small Business" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-business.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Small
                                        Business</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">SMBs,
                                      creators, freelancers</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/teams/nonprofit/" title="Nonprofit" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-nonprofit.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Nonprofit</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Nonprofit
                                      organizations</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/teams/education/" title="Education" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-education.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Education</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Students,
                                      teachers, edu institutions</p>
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
                              <span className="v-subpixel-antialiased v-flex-1 v-py-2">Industry</span>
                            </div>
                            <ul className="v-megamenu-tab-menu v-hidden v-list-none v-mb-0 md:v-flex md:v-pt-0" role="menu" tabIndex={0}>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/industry/marketing/" title="Marketing & Media" data-wpel-link="internal" target="_self" rel="follow">
                                  Marketing &amp; Media </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/teams/agencies/" title="Agencies & Consulting" data-wpel-link="internal" target="_self" rel="follow">
                                  Agencies &amp; Consulting </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/industry/technology/" title="Technology" data-wpel-link="internal" target="_self" rel="follow">
                                  Technology </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/industry/insurance/" title="Insurance" data-wpel-link="internal" target="_self" rel="follow">
                                  Insurance </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/teams/sports/" title="Sports" data-wpel-link="internal" target="_self" rel="follow">
                                  Sports </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/industry/finance/" title="Finance" data-wpel-link="internal" target="_self" rel="follow">
                                  Finance </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/industry/healthcare/" title="Healthcare" data-wpel-link="internal" target="_self" rel="follow">
                                  Healthcare </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/industry/pharma/" title="Pharma" data-wpel-link="internal" target="_self" rel="follow">
                                  Pharma </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/industry/consumer-goods/" title="Consumer Goods" data-wpel-link="internal" target="_self" rel="follow">
                                  Consumer Goods </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/industry/hospitality-entertainment/" title="Hospitality" data-wpel-link="internal" target="_self" rel="follow">
                                  Hospitality </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/industry/public-sector/" title="Public Sector" data-wpel-link="internal" target="_self" rel="follow">
                                  Public Sector </a>
                              </li>
                            </ul>
                          </div>
                          <div className="v-col xl:v-px-4">
                            <div className="v-megamenu-tab v-chevron-before v-chevron-after v-mb-3 v-flex v-items-center v-flex-0-auto md:v-mb-0 md:v-pl-0 xl:v-cursor-default">
                              <span className="v-subpixel-antialiased v-flex-1 v-py-2">Role</span>
                            </div>
                            <ul className="v-megamenu-tab-menu v-hidden v-list-none v-mb-0 md:v-flex md:v-pt-0" role="menu" tabIndex={0}>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/role/executive-director/" title="Executive/Director" data-wpel-link="internal" target="_self" rel="follow">
                                  Executive/Director </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/teams/marketing/" title="Marketing" data-wpel-link="internal" target="_self" rel="follow">
                                  Marketing </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/teams/sales/" title="Sales" data-wpel-link="internal" target="_self" rel="follow">
                                  Sales </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/role/product-project-manager/" title="Product & Project Manager" data-wpel-link="internal" target="_self" rel="follow">
                                  Product &amp; Project Manager </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/teams/training-and-development/" title="Training & Development" data-wpel-link="internal" target="_self" rel="follow">
                                  Training &amp; Development </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/role/admin-ops/" title="Admin & Operations" data-wpel-link="internal" target="_self" rel="follow">
                                  Admin &amp; Operations </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/teams/human-resources/" title="Human Relations" data-wpel-link="internal" target="_self" rel="follow">
                                  Human Relations </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/role/finance/" title="Finance" data-wpel-link="internal" target="_self" rel="follow">
                                  Finance </a>
                              </li>
                              <li className="v-megamenu-tab-item v-mt-3">
                                <a className="v-megamenu-tab-link v-block v-relative v-text-dark-3" href="https://www.visme.co/role/data-analytics/" title="Data & Analytics" data-wpel-link="internal" target="_self" rel="follow">
                                  Data &amp; Analytics </a>
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
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/use-case/content-creation/" title="All-in-One Content Creation" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-all-in-one.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">All-in-One
                                  Content Creation</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/presentation-software/" title="Presentations" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-presentations.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Presentations</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/use-case/interactive-content/" title="Interactive Content" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-interactive-content.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Interactive
                                  Content</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/design-collaboration/" title="Team Collaboration" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-team-collaboration.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Team
                                  Collaboration</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/use-case/strategic-planning/" title="Reports & Strategic Planning" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-reports.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Reports
                                  &amp; Strategic Planning</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/use-case/brand-management/" title="Brand & Asset Management" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-brand.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Brand
                                  &amp; Asset Management</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/teams/training-and-development/" title="Employee Training" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-employee-training.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Employee
                                  Training</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/data-visualization-tools/" title="Analytics & Data Visualization" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-analytics.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Analytics
                                  &amp; Data Visualization</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/use-case/governance-visibility/" title="Governance & Visibility" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-governance.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Governance
                                  &amp; Visibility</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/use-case/project-management/" title="Project Management" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-project-management.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Project
                                  Management</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/use-case/team-meetings/" title="Team Meetings" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-team-meetings.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Team
                                  Meetings</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/use-case/events-workshops-conferences/" title="Events, Workshops, Conferences" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-events.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Events,
                                  Workshops, Conferences</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/use-case/diagram-mapping/" title="Diagram & Mapping" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-diagram.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Diagram
                                  &amp; Mapping</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/social-media-scheduler/" title="Plan & Schedule Content" data-wpel-link="internal" target="_self" rel="follow">
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
                            <a className="v-link v-morelink v-hidden xl:v-block v-flex-0-auto v-text-sm v-subpixel-antialiased" href="https://www.visme.co/templates/" title="View All" data-wpel-link="internal" target="_self" rel="follow">
                              View All </a>
                          </div>
                          <div className="v-megamenu-wrapper v-pt-0">
                            <ul className="v-megamenu-menu v-list-none v-mb-0 v-p-0 v-w-full v-flex-wrap" role="menu" tabIndex={0}>
                              <li className="v-megamenu-item md:v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/presentations/" title="Presentations" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-presentations.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Presentations</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">1000+
                                      layouts and themes</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/infographics/" title="Infographics" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-infographics.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Infographics</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Find
                                      the right format for your information</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/documents/" title="Documents" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-documents.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Documents</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Templates
                                      for every business document</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/charts/" title="Chart & Maps" data-wpel-link="internal" target="_self" rel="follow">
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
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/brand-design-tool/" title="Branded Templates" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-branded.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Branded
                                        Templates</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Get
                                      templates that match your brand</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/brand-guidelines/" title="Branded Guidelines" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-branded-guidelines.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Branded
                                        Guidelines</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Define
                                      your brand style and indentity</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/forms-surveys/" title="Forms & Surveys" data-wpel-link="internal" target="_self" rel="follow">
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
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/reports/" title="Reports" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-reports.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Reports</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Beautiful
                                      visual report templates</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/proposals/" title="Proposals" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-proposals.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Proposals</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Professional
                                      proposal templates</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/ebooks/" title="eBooks" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-ebooks.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">eBooks</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Create
                                      an eye-catching interactive Ebook</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/one-pagers/" title="One Pagers" data-wpel-link="internal" target="_self" rel="follow">
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
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/whiteboards/" title="Whiteboards" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-whiteboards.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Whiteboards</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Templates
                                      to brainstorm, plan and design</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/videos/" title="Video & GIFs" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-videos.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Video
                                        &amp; GIFs</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Find
                                      the perfect preanimated template</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/social-media-graphics/" title="Social Media Graphics" data-wpel-link="internal" target="_self" rel="follow">
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
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/surveys/" title="Survey Results" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-survey-results.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Survey
                                        Results</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Templates
                                      to visualize survey results</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/brochures/" title="Brochures" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-brochures.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Brochures</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Beautiful
                                      print or digital brochure templates</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/flyers/" title="Flyers" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-item-icon v-icon v-w-10 v-h-10 v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-flyers.png" />
                                  <div className="v-megamenu-item-details v-flex-1">
                                    <p className="v-megamenu-item-title v-mb-0 v-text-dark-2"><strong className="v-font-normal v-subpixel-antialiased">Flyers</strong></p>
                                    <p className="v-megamenu-item-desc v-text-dark-3 v-mb-0 v-mt-1 v-text-xs">Beautiful
                                      print or digital flyer templates</p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-item v-mt-2">
                                <a className="v-megamenu-item-link v-flex v-items-start v-relative v-h-full v-py-2.5 v-px-2 v-rounded-lg v-text-dark-3 v-text-sm" href="https://www.visme.co/templates/training-manuals/" title="Training Manuals" data-wpel-link="internal" target="_self" rel="follow">
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
                            <a className="v-link v-morelink v-hidden xl:v-block v-flex-0-auto v-text-sm v-subpixel-antialiased" href="https://visme.co/blog/category/case-studies/" title="View All" data-wpel-link="internal" target="_self" rel="follow">
                              View All </a>
                          </div>
                          <div className="v-megamenu-wrapper v-pt-0 xl:v-px-0">
                            <ul className="v-megamenu-menu v-megamenu-grid-menu v-flex v-list-none v-mb-0" role="menu" tabIndex={0}>
                              <li className="v-megamenu-grid-item md:v-mt-3">
                                <a className="v-megamenu-grid-item-link v-block v-relative v-overflow-hidden v-h-full" href="https://visme.co/blog/florida-panthers-win-new-clients-with-visme/" title="How the Florida Panthers Maximize Their Workflow & Win New Clients Using Visme" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-grid-item-thumbnail-wrapper">
                                    <div className="v-megamenu-grid-item-thumbnail v-thumb v-abs v-w-full v-h-full skip-lazy" data-thumb="https://visme.co/blog/wp-content/uploads/2023/10/Florida-Panthers-Case-Study-Thumbnail-1024x573.jpg" />
                                  </div>
                                  <div className="v-megamenu-grid-item-details v-py-3">
                                    <p className="v-megamenu-grid-item-title v-mb-0 v-text-dark-2 v-subpixel-antialiased">
                                      How the Florida Panthers Maximize Their
                                      Workflow &amp; Win New Clients Using Visme
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-grid-item md:v-mt-3">
                                <a className="v-megamenu-grid-item-link v-block v-relative v-overflow-hidden v-h-full" href="https://visme.co/blog/increasing-lead-magnet-conversions-with-visme-form-builder/" title="Converting More Leads from Existing Traffic with Visme’s Interactive Form Builder" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-grid-item-thumbnail-wrapper">
                                    <div className="v-megamenu-grid-item-thumbnail v-thumb v-abs v-w-full v-h-full skip-lazy" data-thumb="https://visme.co/blog/wp-content/uploads/2023/09/Visme-Forms-Lead-Magnets-Case-Study-Thumbnail-1024x573.jpg" />
                                  </div>
                                  <div className="v-megamenu-grid-item-details v-py-3">
                                    <p className="v-megamenu-grid-item-title v-mb-0 v-text-dark-2 v-subpixel-antialiased">
                                      Converting More Leads from Existing
                                      Traffic with Visme’s Interactive Form
                                      Builder </p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-grid-item md:v-mt-3">
                                <a className="v-megamenu-grid-item-link v-block v-relative v-overflow-hidden v-h-full" href="https://visme.co/blog/denver-broncos-use-visme/" title="How the Denver Broncos Use Visme to Visualize Data, Execute Strategies & Wow Partners" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-grid-item-thumbnail-wrapper">
                                    <div className="v-megamenu-grid-item-thumbnail v-thumb v-abs v-w-full v-h-full skip-lazy" data-thumb="https://visme.co/blog/wp-content/uploads/2023/09/Broncos-Visme-Case-Study--1024x573.png" />
                                  </div>
                                  <div className="v-megamenu-grid-item-details v-py-3">
                                    <p className="v-megamenu-grid-item-title v-mb-0 v-text-dark-2 v-subpixel-antialiased">
                                      How the Denver Broncos Use Visme to
                                      Visualize Data, Execute Strategies &amp; Wow
                                      Partners </p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-grid-item md:v-mt-3">
                                <a className="v-megamenu-grid-item-link v-block v-relative v-overflow-hidden v-h-full" href="https://visme.co/blog/consultancy-uses-visme-to-create-client-facing-content/" title="How a Consultancy Uses Visme to Create Engaging Client-Facing Content" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-grid-item-thumbnail-wrapper">
                                    <div className="v-megamenu-grid-item-thumbnail v-thumb v-abs v-w-full v-h-full skip-lazy" data-thumb="https://visme.co/blog/wp-content/uploads/2023/06/How-a-Consultancy-Uses-Visme-to-Create-Engaging-Client-Facing-Content-Header-1024x266.jpg" />
                                  </div>
                                  <div className="v-megamenu-grid-item-details v-py-3">
                                    <p className="v-megamenu-grid-item-title v-mb-0 v-text-dark-2 v-subpixel-antialiased">
                                      How a Consultancy Uses Visme to Create
                                      Engaging Client-Facing Content </p>
                                  </div>
                                </a>
                              </li>
                              <li className="v-megamenu-grid-item md:v-mt-3">
                                <a className="v-megamenu-grid-item-link v-block v-relative v-overflow-hidden v-h-full" href="https://visme.co/blog/visme-case-study-saving-time-and-cost/" title="How WOW! is Saving Nearly 79% in Time and Cost With Visme" data-wpel-link="internal" target="_self" rel="follow">
                                  <div className="v-megamenu-grid-item-thumbnail-wrapper">
                                    <div className="v-megamenu-grid-item-thumbnail v-thumb v-abs v-w-full v-h-full skip-lazy" data-thumb="https://visme.co/blog/wp-content/uploads/2021/01/Wow-thumbnail-1024x573.jpg" />
                                  </div>
                                  <div className="v-megamenu-grid-item-details v-py-3">
                                    <p className="v-megamenu-grid-item-title v-mb-0 v-text-dark-2 v-subpixel-antialiased">
                                      How WOW! is Saving Nearly 79% in Time and
                                      Cost With Visme </p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="v-megamenu-section v-megamenu-section-secondary v-col xl:v-px-5 md:v-pt-3">
                        <div className="v-megamenu-heading v-flex v-items-center">
                          <span className="v-megamenu-label v-chevron-before v-w-full v-flex v-items-center v-flex-1 v-py-2 xl:v-pl-5">
                            Inspiration (Created with Visme) </span>
                          <a className="v-link v-morelink v-hidden xl:v-block v-flex-0-auto v-text-sm v-subpixel-antialiased" href="https://www.visme.co/gallery/" title="View All" data-wpel-link="internal" target="_self" rel="follow">
                            View All </a>
                        </div>
                        <div className="v-megamenu-wrapper v-hidden md:v-block">
                          <ul className="v-megamenu-menu v-megamenu-menu-alt v-w-full v-list-none v-mb-0 v-p-0 md:v-flex v-flex-wrap xl:v-pl-1" role="menu" tabIndex={0}>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/gallery/#/category-presentation" title="Presentations" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-small-presentations.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Presentations</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/gallery/#/category-ebook-doc" title="Document / EBooks" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-small-proposals.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Document
                                  / EBooks</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/gallery/#/category-infographic" title="Infographics / Data Viz" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-blog-infographics.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Infographics
                                  / Data Viz</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/gallery/#/category-form-survey" title="Forms / Surveys" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-small-survey.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Forms
                                  / Surveys</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/gallery/#/category-video" title="Videos" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-blog-video-animations.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Videos</span>
                              </a>
                            </li>
                            <li className="v-megamenu-item v-megamenu-item-alt v-flex-0-auto">
                              <a className="v-megamenu-item-link v-megamenu-icon-link v-w-full v-mb-3 md:v-mb-0 v-flex v-flex-0-auto" href="https://www.visme.co/gallery/#/category-graphic" title="Graphics" data-wpel-link="internal" target="_self" rel="follow">
                                <div className="v-icon v-icon-small v-w-7 v-h-7 xl:v-h-8 xl:v-w-8 xl:v-flex-0-auto" data-icon="https://www.visme.co/wp-content/themes/visme/images/2024/menu/i-template-small-website-graphics.svg" />
                                <span className="v-leading-5 v-flex-1 v-py-1 v-mb-0 xl:v-py-1.5">Graphics</span>
                              </a>
                            </li>
                          </ul>
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
                <a className="v-action-btn v-btn v-flex-1 v-relative v-z-10" href="https://dashboard.visme.co/login" target="_blank" rel="nofollow noopener" title="Login" data-wpel-link="internal">
                  Login </a>
              </li>
              <li className="v-action v-action-sales v-flex-1 v-flex-basis-0 v-flex xl:v-flex-0-auto" style={{display: 'none'}}>
                <a className="v-action-btn v-btn v-btn-secondary v-flex-1 v-relative v-z-10" href="https://www.visme.co/teams/?utm_source=ContactSales" title="Request a Demo" data-wpel-link="internal" target="_self" rel="follow">
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