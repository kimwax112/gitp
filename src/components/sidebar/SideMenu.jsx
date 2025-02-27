import React from 'react';
import "./SideMenucss.css";

export default function SideMenu() {
  return (
    <div className='sidestyle'>
        <div className='SideSearchWrapper'>
        <div className='SideSearchStack'> 
                <div className='ExSearchCon' >
                <span style={{fontWeight:'bold'}}>결과 내 검색</span>
                <input type="text"></input>
                <div className='InputDiv'>
                <span>
                <input type="checkbox"></input>검색어 제외
                </span>
                <button>적용</button>
                </div>
                </div>
        
        </div>
        <div className='MenuBar2'> 
                <nav>
                    <ul className='MainMenu'>
                        <li><a href='#'>상의 Top</a>
                            <ul className='SubMenuDrop'>
                                <li><a href="#">상의 하위메뉴1</a></li>
                                <li><a href="#">상의 하위메뉴2</a></li>
                                <li><a href="#">상의 하위메뉴3</a></li>
                                <li><a href="#">상의 하위메뉴4</a></li>
                                <li><a href="#">상의 하위메뉴5</a></li>{/*이거 ul태그에 전부 다 적용되는 css 수정할것*/}

                            </ul>
                        </li>
                        <li><a href='#'>아우터 Outer</a>
                        <ul className='SubMenuDrop'>
                                <li><a href="#">아우터 하위메뉴1</a></li>
                                <li><a href="#">아우터 하위메뉴2</a></li>
                                <li><a href="#">아우터 하위메뉴3</a></li>
                                <li><a href="#">아우터 하위메뉴4</a></li>
                                <li><a href="#">아우터 하위메뉴5</a></li>{/*이거 ul태그에 전부 다 적용되는 css 수정할것*/}

                            </ul>
                        </li>
                        <li><a href='#'>바지 Pants</a>
                        <ul className='SubMenuDrop'>
                                <li><a href="#">바지 하위메뉴1</a></li>
                                <li><a href="#">바지 하위메뉴2</a></li>
                                <li><a href="#">바지 하위메뉴3</a></li>
                                <li><a href="#">바지 하위메뉴4</a></li>
                                <li><a href="#">바지 하위메뉴5</a></li>{/*이거 ul태그에 전부 다 적용되는 css 수정할것*/}

                            </ul>
                        </li>
                        <li><a href='#'>원피스 Onepiece</a>
                        <ul className='SubMenuDrop'>
                                <li><a href="#">원피스 하위메뉴1</a></li>
                                <li><a href="#">원피스 하위메뉴2</a></li>
                                <li><a href="#">원피스 하위메뉴3</a></li>
                                <li><a href="#">원피스 하위메뉴4</a></li>
                                <li><a href="#">원피스 하위메뉴5</a></li>{/*이거 ul태그에 전부 다 적용되는 css 수정할것*/}

                            </ul>
                        </li>
                        <li><a href='#'>스커트 Skirt</a>
                        <ul className='SubMenuDrop'>
                                <li><a href="#">스커트 하위메뉴1</a></li>
                                <li><a href="#">스커트 하위메뉴2</a></li>
                                <li><a href="#">스커트 하위메뉴3</a></li>
                                <li><a href="#">스커트 하위메뉴4</a></li>
                                <li><a href="#">스커트 하위메뉴5</a></li>{/*이거 ul태그에 전부 다 적용되는 css 수정할것*/}

                            </ul>
                        </li>
                        <li><a href='#'>스니커즈 Sneakers</a>
                        <ul className='SubMenuDrop'>
                                <li><a href="#">상의 하위메뉴1</a></li>
                                <li><a href="#">상의 하위메뉴2</a></li>
                                <li><a href="#">상의 하위메뉴3</a></li>
                                <li><a href="#">상의 하위메뉴4</a></li>
                                <li><a href="#">상의 하위메뉴5</a></li>{/*이거 ul태그에 전부 다 적용되는 css 수정할것*/}

                            </ul>
                        </li>
                        <li><a href='#'>신발 Shoes</a>
                        <ul className='SubMenuDrop'>
                                <li><a href="#">상의 하위메뉴1</a></li>
                                <li><a href="#">상의 하위메뉴2</a></li>
                                <li><a href="#">상의 하위메뉴3</a></li>
                                <li><a href="#">상의 하위메뉴4</a></li>
                                <li><a href="#">상의 하위메뉴5</a></li>{/*이거 ul태그에 전부 다 적용되는 css 수정할것*/}

                            </ul>
                        </li>
                        <li><a href='#'>가방 Bag</a>
                        <ul className='SubMenuDrop'>
                                <li><a href="#">상의 하위메뉴1</a></li>
                                <li><a href="#">상의 하위메뉴2</a></li>
                                <li><a href="#">상의 하위메뉴3</a></li>
                                <li><a href="#">상의 하위메뉴4</a></li>
                                <li><a href="#">상의 하위메뉴5</a></li>{/*이거 ul태그에 전부 다 적용되는 css 수정할것*/}

                            </ul>
                        </li>
                    </ul>
                </nav>
        </div>
        </div>
    </div>
  )
}
