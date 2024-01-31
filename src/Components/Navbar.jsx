import React, { Component } from 'react'
import "./Navbar.css"

class Navbar extends Component {
  state ={clicked: false};
  handleClick =() =>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  return (
    <>
    <nav>
        <a href="index.html">
          <svg id="logo-50" class="gradient" width="153" height="38" viewBox="0 0 153 38" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.878785 28.1818L0.878788 9.39393L10.2727 14.6128L10.2727 23.0151L17.7879 27.2424L25.303 23.0151L25.303 14.6128L34.697 9.39393L34.697 28.1818L17.7879 37.5757L0.878785 28.1818Z" class="cneutral" fill="#192657"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57576 12.0034L0.878784 9.39394L17.7879 0L34.697 9.39394L30 12.0034L30 25.8333L17.7879 32.8788L5.57575 25.8333L5.57576 12.0034ZM29.4912 12.2861L25.303 14.6128V14.5606L17.7879 10.3333L10.2727 14.5606V14.6128L6.08459 12.2861L6.08459 25.5443L17.7879 32.2962L29.4912 25.5443L29.4912 12.2861Z" fill="url(#paint500_linear_1501_1259)"></path> <path d="M43.7001 26.697V10.9152H46.6761V23.9915H53.8907V26.697H43.7001Z" class="cneutral" fill="#192657"></path> <path d="M60.3159 27.0126C59.2037 27.0126 58.2042 26.7872 57.3174 26.3362C56.4306 25.8853 55.7317 25.2315 55.2207 24.3748C54.7096 23.5181 54.4541 22.4885 54.4541 21.2861V20.9253C54.4541 19.7229 54.7096 18.6933 55.2207 17.8366C55.7317 16.9799 56.4306 16.3261 57.3174 15.8752C58.2042 15.4242 59.2037 15.1988 60.3159 15.1988C61.4282 15.1988 62.4277 15.4242 63.3145 15.8752C64.2013 16.3261 64.9002 16.9799 65.4112 17.8366C65.9222 18.6933 66.1778 19.7229 66.1778 20.9253V21.2861C66.1778 22.4885 65.9222 23.5181 65.4112 24.3748C64.9002 25.2315 64.2013 25.8853 63.3145 26.3362C62.4277 26.7872 61.4282 27.0126 60.3159 27.0126ZM60.3159 24.4875C61.1877 24.4875 61.9092 24.2095 62.4803 23.6533C63.0515 23.0822 63.337 22.2705 63.337 21.2184V20.993C63.337 19.9409 63.0515 19.1367 62.4803 18.5806C61.9242 18.0095 61.2027 17.7239 60.3159 17.7239C59.4442 17.7239 58.7227 18.0095 58.1516 18.5806C57.5804 19.1367 57.2949 19.9409 57.2949 20.993V21.2184C57.2949 22.2705 57.5804 23.0822 58.1516 23.6533C58.7227 24.2095 59.4442 24.4875 60.3159 24.4875Z" class="cneutral" fill="#192657"></path> <path d="M67.2443 21.1508V20.7901C67.2443 19.6177 67.4772 18.6182 67.9432 17.7915C68.4091 16.9498 69.0254 16.311 69.7919 15.8752C70.5735 15.4242 71.4227 15.1988 72.3395 15.1988C73.3616 15.1988 74.1357 15.3792 74.6617 15.7399C75.1878 16.1006 75.5711 16.4764 75.8115 16.8672H76.2174V15.5144H79.013V28.681C79.013 29.4475 78.7875 30.0562 78.3366 30.5072C77.8857 30.9731 77.2845 31.2061 76.533 31.2061H69.0479V28.7261H75.541C75.9618 28.7261 76.1723 28.5006 76.1723 28.0497V25.1413H75.7664C75.6161 25.3818 75.4057 25.6298 75.1352 25.8853C74.8646 26.1258 74.5039 26.3287 74.053 26.4941C73.6021 26.6594 73.0309 26.7421 72.3395 26.7421C71.4227 26.7421 70.5735 26.5241 69.7919 26.0882C69.0254 25.6373 68.4091 24.9985 67.9432 24.1719C67.4772 23.3302 67.2443 22.3232 67.2443 21.1508ZM73.1512 24.2621C74.0229 24.2621 74.7519 23.984 75.3381 23.4279C75.9243 22.8718 76.2174 22.0902 76.2174 21.0832V20.8577C76.2174 19.8356 75.9243 19.0541 75.3381 18.513C74.7669 17.9569 74.038 17.6788 73.1512 17.6788C72.2794 17.6788 71.5504 17.9569 70.9643 18.513C70.3781 19.0541 70.085 19.8356 70.085 20.8577V21.0832C70.085 22.0902 70.3781 22.8718 70.9643 23.4279C71.5504 23.984 72.2794 24.2621 73.1512 24.2621Z" class="cneutral" fill="#192657"></path> <path d="M86.4687 27.0126C85.3564 27.0126 84.3569 26.7872 83.4701 26.3362C82.5833 25.8853 81.8844 25.2315 81.3734 24.3748C80.8624 23.5181 80.6069 22.4885 80.6069 21.2861V20.9253C80.6069 19.7229 80.8624 18.6933 81.3734 17.8366C81.8844 16.9799 82.5833 16.3261 83.4701 15.8752C84.3569 15.4242 85.3564 15.1988 86.4687 15.1988C87.5809 15.1988 88.5804 15.4242 89.4672 15.8752C90.354 16.3261 91.0529 16.9799 91.5639 17.8366C92.075 18.6933 92.3305 19.7229 92.3305 20.9253V21.2861C92.3305 22.4885 92.075 23.5181 91.5639 24.3748C91.0529 25.2315 90.354 25.8853 89.4672 26.3362C88.5804 26.7872 87.5809 27.0126 86.4687 27.0126ZM86.4687 24.4875C87.3404 24.4875 88.0619 24.2095 88.633 23.6533C89.2042 23.0822 89.4898 22.2705 89.4898 21.2184V20.993C89.4898 19.9409 89.2042 19.1367 88.633 18.5806C88.0769 18.0095 87.3555 17.7239 86.4687 17.7239C85.5969 17.7239 84.8755 18.0095 84.3043 18.5806C83.7332 19.1367 83.4476 19.9409 83.4476 20.993V21.2184C83.4476 22.2705 83.7332 23.0822 84.3043 23.6533C84.8755 24.2095 85.5969 24.4875 86.4687 24.4875Z" class="cneutral" fill="#192657"></path> <path d="M93.9381 26.697V15.5144H96.7788V26.697H93.9381ZM95.3584 14.2068C94.8474 14.2068 94.4115 14.0415 94.0508 13.7108C93.7051 13.3801 93.5323 12.9442 93.5323 12.4032C93.5323 11.8621 93.7051 11.4262 94.0508 11.0955C94.4115 10.7649 94.8474 10.5995 95.3584 10.5995C95.8845 10.5995 96.3204 10.7649 96.6661 11.0955C97.0118 11.4262 97.1846 11.8621 97.1846 12.4032C97.1846 12.9442 97.0118 13.3801 96.6661 13.7108C96.3204 14.0415 95.8845 14.2068 95.3584 14.2068Z" class="cneutral" fill="#192657"></path> <path d="M98.9122 31.2061V15.5144H101.708V16.8672H102.114C102.369 16.4313 102.767 16.048 103.309 15.7173C103.85 15.3716 104.624 15.1988 105.631 15.1988C106.533 15.1988 107.367 15.4242 108.133 15.8752C108.9 16.311 109.516 16.9573 109.982 17.8141C110.448 18.6708 110.681 19.7079 110.681 20.9253V21.2861C110.681 22.5035 110.448 23.5406 109.982 24.3973C109.516 25.2541 108.9 25.9079 108.133 26.3588C107.367 26.7947 106.533 27.0126 105.631 27.0126C104.954 27.0126 104.383 26.9299 103.917 26.7646C103.466 26.6143 103.098 26.4189 102.813 26.1784C102.542 25.9229 102.324 25.6674 102.159 25.4119H101.753V31.2061H98.9122ZM104.774 24.5326C105.661 24.5326 106.39 24.2545 106.961 23.6984C107.547 23.1273 107.84 22.3006 107.84 21.2184V20.993C107.84 19.9108 107.547 19.0916 106.961 18.5355C106.375 17.9644 105.646 17.6788 104.774 17.6788C103.902 17.6788 103.173 17.9644 102.587 18.5355C102.001 19.0916 101.708 19.9108 101.708 20.993V21.2184C101.708 22.3006 102.001 23.1273 102.587 23.6984C103.173 24.2545 103.902 24.5326 104.774 24.5326Z" class="cneutral" fill="#192657"></path> <path d="M116.919 27.0126C115.461 27.0126 114.266 26.697 113.334 26.0657C112.403 25.4344 111.839 24.5326 111.643 23.3602L114.259 22.6839C114.364 23.2099 114.537 23.6233 114.777 23.9239C115.033 24.2245 115.341 24.4424 115.702 24.5777C116.077 24.6979 116.483 24.7581 116.919 24.7581C117.58 24.7581 118.069 24.6453 118.385 24.4199C118.7 24.1794 118.858 23.8863 118.858 23.5406C118.858 23.1949 118.708 22.9319 118.407 22.7515C118.107 22.5561 117.626 22.3983 116.964 22.2781L116.333 22.1653C115.551 22.015 114.837 21.8121 114.191 21.5566C113.545 21.2861 113.026 20.9178 112.635 20.4519C112.245 19.9859 112.049 19.3847 112.049 18.6482C112.049 17.536 112.455 16.6868 113.267 16.1006C114.078 15.4994 115.146 15.1988 116.468 15.1988C117.716 15.1988 118.753 15.4769 119.579 16.033C120.406 16.5891 120.947 17.3181 121.203 18.2199L118.565 19.0315C118.445 18.4604 118.197 18.0545 117.821 17.8141C117.46 17.5736 117.009 17.4533 116.468 17.4533C115.927 17.4533 115.514 17.551 115.228 17.7464C114.943 17.9268 114.8 18.1823 114.8 18.513C114.8 18.8737 114.95 19.1442 115.251 19.3246C115.551 19.4899 115.957 19.6177 116.468 19.7079L117.099 19.8206C117.941 19.9709 118.7 20.1738 119.377 20.4293C120.068 20.6698 120.609 21.023 121 21.489C121.406 21.9399 121.609 22.5561 121.609 23.3377C121.609 24.5101 121.18 25.4194 120.323 26.0657C119.482 26.697 118.347 27.0126 116.919 27.0126Z" class="cneutral" fill="#192657"></path> <path d="M127.344 26.8773C126.473 26.8773 125.706 26.6819 125.045 26.2912C124.399 25.8853 123.895 25.3292 123.534 24.6228C123.174 23.9164 122.993 23.1047 122.993 22.1879V15.5144H125.834V21.9624C125.834 22.8041 126.037 23.4354 126.443 23.8562C126.863 24.2771 127.457 24.4875 128.224 24.4875C129.095 24.4875 129.772 24.2019 130.253 23.6308C130.734 23.0446 130.974 22.233 130.974 21.1959V15.5144H133.815V26.697H131.019V25.2315H130.614C130.433 25.6073 130.095 25.9755 129.599 26.3362C129.103 26.697 128.351 26.8773 127.344 26.8773Z" class="cneutral" fill="#192657"></path> <path d="M135.962 26.697V15.5144H138.757V16.7319H139.163C139.358 16.3561 139.682 16.033 140.132 15.7624C140.583 15.4769 141.177 15.3341 141.914 15.3341C142.71 15.3341 143.349 15.4919 143.83 15.8075C144.311 16.1081 144.679 16.5064 144.935 17.0024H145.34C145.596 16.5215 145.957 16.1232 146.423 15.8075C146.889 15.4919 147.55 15.3341 148.407 15.3341C149.098 15.3341 149.722 15.4844 150.278 15.785C150.849 16.0705 151.3 16.5139 151.631 17.1152C151.976 17.7013 152.149 18.4453 152.149 19.3472V26.697H149.308V19.5501C149.308 18.9338 149.151 18.4754 148.835 18.1748C148.519 17.8592 148.076 17.7013 147.505 17.7013C146.859 17.7013 146.355 17.9118 145.994 18.3326C145.649 18.7384 145.476 19.3246 145.476 20.0912V26.697H142.635V19.5501C142.635 18.9338 142.477 18.4754 142.162 18.1748C141.846 17.8592 141.403 17.7013 140.831 17.7013C140.185 17.7013 139.682 17.9118 139.321 18.3326C138.975 18.7384 138.802 19.3246 138.802 20.0912V26.697H135.962Z" class="cneutral" fill="#192657"></path> <defs> <linearGradient id="paint500_linear_1501_1259" x1="5.57575" y1="7.30638" x2="30.9394" y2="7.30639" gradientUnits="userSpaceOnUse"> <stop class="ccustom" stop-color="#64C2DB"></stop> <stop offset="0.307292" class="ccompli1" stop-color="#7476ED"></stop> <stop offset="0.604167" class="ccompli1" stop-color="#C994DF"></stop> <stop offset="1" class="ccompli2" stop-color="#E56F8C"></stop> </linearGradient> </defs> </svg>
        </a>
        <div>
            <ul id="navbar" className={this.state.clicked ? "navbar active" : "navbar"}>
                <li><a href="">Home</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Help</a></li>
            </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
    </nav>
    </>
  )
}
}

export default Navbar