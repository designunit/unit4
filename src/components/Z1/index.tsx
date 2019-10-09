import * as React from 'react'

export const Z1: React.FC = () => (
    <div className='main-logo'>
        <style jsx>{`
            .main-logo {
                .logo {
                    width: 100%;
                    // max-width:90%;
                    // max-height:90%;
                    // position:absolute;
                    // top:0;
                    // left:0;
                    // right:0;
                    // bottom:0;
                    // margin:auto;
                }
            }
        `}</style>

        <img className='logo' src='/static/logo.gif' alt='design::unit' />
    </div>
)
