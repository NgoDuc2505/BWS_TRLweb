import { Button } from "antd"
import "./backToTop.css"
import { scrollToTp } from "../../handler/Global_Handler/scrollToTop"
import { UpOutlined } from "@ant-design/icons"

function BackToTopBtn() {
    const handleScrollToTop=(e)=>{
        scrollToTp();
        console.log(e);
    }
  return (
    <div className="btn_back_to_top" onScroll={handleScrollToTop}>
        <Button className="btn btn-warning">
        <UpOutlined></UpOutlined>
        </Button>
    </div>
  )
}

export default BackToTopBtn