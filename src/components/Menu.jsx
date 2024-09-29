import React from "react";

const Menu = () => {
  return (
    <div>
      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>

          <ul className="filters_menu">
            <li className="active" data-filter="*">
              All
            </li>
            <li data-filter=".burger">Burger</li>
            <li data-filter=".pizza">Pizza</li>
            <li data-filter=".pasta">Pasta</li>
            <li data-filter=".fries">Fries</li>
          </ul>

          <div className="filters-content">
            <div className="row grid">
              <div className="col-sm-6 col-lg-4 all pizza">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/menu1.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Buffalo Chicken Pizza</h5>
                      <p>
                        A timeless favorite with fresh mozzarella, basil, and a
                        rich tomato sauce, delivering a taste of Italy in every
                        bite.
                      </p>
                      <div className="options">
                        <h6>$20</h6>
                        <a href="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                       c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                       C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                       c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                       C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                       c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all burger">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/menu2.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Spicy Pepperoni Pizza</h5>
                      <p>
                        A classic delight featuring fresh mozzarella, fragrant
                        basil, and savory tomato sauce, offering a true Italian
                        experience in every mouthful.
                      </p>
                      <div className="options">
                        <h6>$15</h6>
                        <a href="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                       c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                       C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                       c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                       C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                       c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pizza">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/menu3.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Veggie Supreme Pizza</h5>
                      <p>
                        A garden of fresh vegetables, including bell peppers,
                        onions, mushrooms, and olives, topped with a generous
                        layer of cheese.
                      </p>
                      <div className="options">
                        <h6>$17</h6>
                        <a href="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                       c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                       C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                       c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                       C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                       c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pasta">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/menu4.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>BBQ Chicken Pizza</h5>
                      <p>
                        A beloved dish with creamy mozzarella, vibrant basil,
                        and a robust tomato sauce, bringing the flavors of Italy
                        to life with each bite.
                      </p>
                      <div className="options">
                        <h6>$18</h6>
                        <a href="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                       c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                       C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                       c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                       C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                       c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all fries">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/menu1.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Hawaiian Pizza</h5>
                      <p>
                        A unique blend of ham and pineapple, offering a sweet
                        and savory combination that's sure to satisfy your taste
                        buds.
                      </p>
                      <div className="options">
                        <h6>$10</h6>
                        <a href="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                       c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                       C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                       c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                       C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                       c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pizza">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/menu2.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Four Cheese Pizza</h5>
                      <p>
                        A cheesy delight featuring a blend of mozzarella,
                        cheddar, gouda, and parmesan, creating a rich and creamy
                        taste experience.
                      </p>
                      <div className="options">
                        <h6>$15</h6>
                        <a href="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                       c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                       C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                       c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                       C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                       c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all burger">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/menu3.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Pesto Veggie Pizza</h5>
                      <p>
                        Packed with an assortment of meats including sausage,
                        bacon, pepperoni, and ham, this pizza is a carnivore's
                        dream come.
                      </p>
                      <div className="options">
                        <h6>$12</h6>
                        <a href="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                       c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                       C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                       c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                       C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                       c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all burger">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/menu4.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Seafood Pizza</h5>
                      <p>
                        A flavorful blend of pesto sauce and a variety of fresh
                        vegetables, offering a unique twist on traditional pizza
                        flavors.
                      </p>
                      <div className="options">
                        <h6>$14</h6>
                        <a href="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                       c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                       C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                       c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                       C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                       c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pasta">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/menu4.jpg" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Classic Margherita Pizza</h5>
                      <p>
                        Spicy buffalo chicken with a tangy sauce, topped with
                        celery and a drizzle of ranch dressing for a bold flavor
                        kick.
                      </p>
                      <div className="options">
                        <h6>$10</h6>
                        <a href="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                       c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                       C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                       c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                       C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                       c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href=""> View More </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
