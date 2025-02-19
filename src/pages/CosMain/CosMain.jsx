import React from 'react';
import "./CosMainCss.css";
import { MainBanner } from "../index"; // MainBanner 컴포넌트 임포트 (배너 랜덤 선택 처리)
import {Navbar,Footer, Header} from "../../components";



export default function CosMain() {
  return (
    <div>
        <div className='WholeWrapper'>            
            <div className='ContentsWrapper'>
                <MainBanner />  {/* MainBanner로 랜덤 배너 처리 */}

                <div className='Content3'>
                    <div className='ContentSell'>진행중인 계약</div>
                </div>
                <div className='Content3'>
                    <div className='ContentSell'>추천 디자이너 포트폴리오</div>
                </div>
                <div className='Content3'>
                    <div className='ContentSell'>추천 디자인</div>
                </div>
                
            </div>
            
        </div>
    </div>
  );
}
