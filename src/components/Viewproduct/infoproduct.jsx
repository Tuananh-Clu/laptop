
import React, { useState } from 'react'
import { Model } from '../../assets/assets';
import { useParams } from 'react-router-dom';


const Infoproduct = () => {
    const [text,setText]=useState("Questions");
    const [openMore,setOpenMore]=useState("Technical");
     const {id}=useParams();
     const product=Model.find((item)=>item.code===id);
    
  return (
    <div className=' mt-20 px-20 transition animate-ease-in-out duration-900' >
             <div className="flex flex-row gap-5 border-b border-gray-300">
              <button
                onClick={() => setOpenMore("Technical")}
                className={`pb-2 ${
                  openMore === "Technical"
                    ? "border-red-500 border-b-4"
                    : "border-black border-b-4"
                }`}
              >
                Chi tiết kỹ thuật
              </button>
              <button
                onClick={() => setOpenMore("Info")}
                className={`pb-2 ${
                  openMore === "Info"
                    ? "border-red-500 border-b-4"
                    : "border-black border-b-4"
                }`}
              >
                Thông tin sản phẩm
              </button>
              <button
                onClick={() => setOpenMore("Box")}
                className={`pb-2 ${
                  openMore === "Box"
                    ? "border-red-500 border-b-4"
                    : "border-black border-b-4"
                }`}
              >
                Đi kèm hộp
              </button>
              <button
                onClick={() => setOpenMore("Questions")}
                className={`pb-2 ${
                  openMore === "Questions"
                    ? "border-red-500 border-b-4"
                    : "border-black border-b-4"
                }`}
              >
                Câu hỏi thường gặp
              </button>
         </div>
            {openMore==="Technical"?
             <table className=" table-auto  w-full  mb-20  mt-10">
                    <tbody className='flex flex-col gap-5 '>
                      <tr >
                        <th className="border border-gray-400 px-4 py-2 text-left bg-gray-100">SKU</th>
                        <td className="border border-gray-400 px-4 py-2">{product.code}</td>
                      </tr>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2 text-left bg-gray-100">BRAND</th>
                        <td className="border border-gray-400 px-4 py-2">ROG (Republic of Gamers)</td>
                      </tr>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2 text-left bg-gray-100">COLOR</th>
                                          <td className="border border-gray-400 px-4 py-2">
                          {product.model.includes("Strix")
                            ? "Black"
                            : product.model.includes("Zephyrus")
                            ? "White"
                            : "Gray"}
                        </td>
                      </tr>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2 text-left bg-gray-100">OS</th>
                        <td className="border border-gray-400 px-4 py-2">{product.os}</td>
                      </tr>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2 text-left bg-gray-100">CPU</th>
                        <td className="border border-gray-400 px-4 py-2">{product.cpu}</td>
                      </tr>
                      <tr>
                         <th className="border border-gray-400 px-4 py-2 text-left bg-gray-100">Graphic Card</th>
                        <td className="border border-gray-400 px-4 py-2">{product.gpu}</td>
                      </tr>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2 text-left bg-gray-100">Display Size</th>
                        <td className="border border-gray-400 px-4 py-2">{product.display}</td>
                      </tr>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2 text-left bg-gray-100">Storage</th>
                        <td className="border border-gray-400 px-4 py-2">{product.storage}</td>
                      </tr>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2 text-left bg-gray-100">RAM</th>
                        <td className="border border-gray-400 px-4 py-2">32GB DDR5X</td>
                      </tr>
                    </tbody>
                  </table>:openMore==="Info"?<div className='pt-50'></div>:
                  openMore==="Box"?
                  <div className='px-5 mb-30 '>
                     <ul className='list-disc mt-5'>
                      <li>TYPE-C, 100W AC Adapter, Output: 20V DC, 5A, 100W, Input: 100~240V AC 50/60Hz universal</li>
                       <li>{product.model}</li>
                    </ul>
                  </div>
    :openMore==="Questions"?
     <div className='pt-10  flex flex-col '>
      <div className='flex flex-row'>
        <h1 onClick={()=>{setText("Questions")}} className='border-1 p-2 border-gray-400'>Questions</h1>
        <h1 onClick={()=>{setText("Order")}} className='border-1 p-2 border-gray-400'>Order</h1>
        <h1 onClick={()=>{setText("Return")}} className='border-1 p-2 border-gray-400'>Return</h1>
      </div>
      {text==="Questions"?
        <div className='px-5  border border-gray-400 mb-20' >
          <ul className='list-decimal'>
            <li>
              <h1 className='font-bold'>Tôi có thể hủy đơn hàng hay không?</h1>
              <span>Trong trường hợp bạn muốn hủy đơn hàng, hãy liên hệ ngay với ASUS thông qua hotline hoặc chatbox trước khi đơn hàng được giao. Trong trường hợp đơn hàng được giao, bạn sẽ không thể hủy.</span>
            </li>
            <li>
              <h1 className='font-bold'>Những hình thức thanh toán nào được chấp nhận?</h1>
              <span>ASUS chấp nhận hầu hết các hình thức thanh toán phổ biến hiện nay: Thẻ ngân hàng, Thẻ tín dụng, Chuyển khoản, Ví điện tử.</span>
            </li>
            <li>
              <h1 className='font-bold'>Tôi có thể thanh toán trả góp hay không?</h1>
              <span>Có. ASUS áp dụng hình thức thanh toán trả góp cho một số mã hàng trong gian hàng. Vui lòng xem hướng dẫn mua hàng tại ĐÂY.</span>
            </li>
            <li>
              <h1 className='font-bold'>Tôi có thể tạo tài khoản tại ASUS không?</h1>
              <span>Trong phiên bản đầu tiên này, ASUS chưa cung cấp tính năng thành viên. Bạn có thể mua hàng mà không cần đăng nhập tài khoản. Chúng tôi sẽ thông báo trong lần cập nhật tiếp theo với nhiều ưu đãi cho các thành viên.</span>
            </li>
            <li>
              <h1 className='font-bold'>Tôi cần làm gì nếu không nhận được email thông báo đơn hàng?</h1>
              <span>Bạn hãy đảm bảo địa chỉ email khi đặt hàng là chính xác. Ngoài ra, bạn có thể liên hệ qua email/hotline hoặc chat box, gặp tư vấn viên để kiểm tra thông tin đơn hàng.</span>
            </li>
            <li>
              <h1 className='font-bold'> Tôi có thể nâng cấp linh kiện hay sản phẩm khi mua hàng không?</h1>
              <span>ASUS không cung cấp trực tiếp dịch vụ nâng cấp linh kiện hay sản phẩm khi bạn mua hàng trên website. Nếu bạn có nhu cầu nâng cấp hãy mang sản phẩm và linh kiện tới các Trung tâm dịch vụ của ASUS trên toàn quốc để được hỗ trợ.
                <br/>ASUS cũng khuyến cáo khách hàng không tự ý nâng cấp linh kiện vì có thể ảnh hưởng tới điều kiện bảo hành của sản phẩm
              </span>
            </li>
            <li>
              <h1 className='font-bold'>Chính sách bảo hành của ASUS?</h1>
              <span>ASUS áp dụng chính sách bảo hành 2 năm toàn cầu cho hầu hết các loại máy tính xách tay. Ngoài ra, bạn có thể kiểm tra thông tin khi mua máy hoặc gọi đến số hotline của ASUS để được hỗ trợ.</span>
              </li>
            <li>
              <h1 className='font-bold'>Tôi có được áp dụng nhiều voucher trên 1 đơn hàng không?</h1>
              <span>Tùy theo chương trình khuyến mãi và sản phẩm áp dụng, khách hàng vẫn có thể dùng được nhiều hơn một voucher trên cùng một đơn hàng.</span>
            </li>
            <li>
              <h1 className='font-bold'>Tôi có thể mua dịch vụ bảo hành mở rộng ASUS Premium Care cho sản phẩm ASUS của mình như thế nào?</h1>
              <span>Bạn có thể mua ASUS Premium Care trong ứng dụng MyASUS hoặc mua từ Cửa hàng trực tuyến ASUS Store của chúng tôi. Để biết thêm thông tin về ASUS Premium Care, hãy truy cập https://vn.store.asus.com/warranty/serialnumber/.</span>
            </li>
          </ul>
        </div>
        :text==="Order"?
         <div className='px-5  border border-gray-400 mb-20' >
          <ul className='list-decimal'>
            <li>
              <h1 className='font-bold'>Tôi có thể kiểm tra tình trạng đơn hàng như thế nào?</h1>
              <span>Bạn có thể kiểm tra tình trạng đơn hàng tại trang Đơn hàng của tôi, điền thông tin cá nhân: email, số điện thoại hoặc mã số đơn hàng. Ngoài ra, bạn cũng sẽ nhận được email thông báo về đơn hàng tại địa chỉ email đã đăng ký.</span>
            </li>
            <li>
              <h1 className='font-bold'>Tôi có phải trả phí giao hàng hay không?</h1>
              <span>Khi bạn đặt hàng, phí giao hàng sẽ được thông báo dựa trên đơn hàng cũng như địa chỉ hay thời gian giao hàng. Trong một số sự kiện, ASUS sẽ có những ưu đãi như miễn phí vận chuyển. Hãy thường xuyên ghé qua fanpage hoặc website của chúng tôi để được cập nhật.</span>
            </li>
            <li>
              <h1 className='font-bold'>Tôi sẽ nhận được hàng trong bao lâu?</h1>
              <span>Thông thường, những đơn hàng trong nội thành sẽ được giao từ 1-3 ngày làm việc, ngoại thành từ 5-7 ngày làm việc. Tuy nhiên thời gian giao hàng có thể sớm hoặc lâu hơn tùy vào tình trạng tồn kho của mã hàng bạn đặt. Bạn sẽ nhận được thông báo qua địa chỉ email đã đăng ký.</span>
            </li>
            <li>
              <h1 className='font-bold'>Tôi sẽ nhận được thông báo nếu đơn hàng bị trễ?</h1>
              <span>Trong trường hợp đơn hàng không được giao trong thời gian dự kiến, ASUS sẽ gửi thông báo tới bạn qua địa chỉ email đã đăng ký về tình trạng đơn hàng và thời gian giao hàng mới. Trong trường hợp khách không đồng ý với thời gian giao hàng mới thì có thể liên hệ chăm sóc khách hàng ASUS để hủy đơn.</span>
            </li>
            <li>
              <h1 className='font-bold'>Tôi có thể thay đổi thông tin giao hàng hay không?</h1>
              <span>Nếu bạn đã nhận được email thông báo về đơn đặt hàng nhưng chưa nhận được email thông báo về lịch giao hàng cụ thể, hãy liên hệ với ASUS sớm nhất có thể để thay đổi thông tin giao hàng. Khách hàng lưu ý nếu đơn hàng đang được giao thì sẽ không thể thay đổi địa chỉ giao hàng.</span>
            </li>
            
          </ul>
        </div>
           :text==="Return"?

            <div className='px-5  border border-gray-400 mb-20' >
          <ul className='list-decimal'>
            <li>
              <h1 className='font-bold'>Chính sách của ASUS về việc hoàn đơn và đổi trả là như thế nào?</h1>
              <span>ASUS luôn không ngừng cố gắng để cung cấp dịch vụ tốt nhất tới khách hàng. Chúng tôi khuyến cáo khách hàng đọc kỹ chính sách hoàn đơn và đổi trả tại mục Chính sách bán hàng trước khi đặt hàng để nắm rõ về những quyền lợi của mình
                <br/>
                Chúng tôi cũng khuyến cáo khách hàng kiểm tra kỹ hàng hóa nhận được, đảm bảo đúng mẫu mã và chất lượng trong mô tả (khuyến cáo khách hàng quay lại video tình trạng bên ngoài của sản phẩm, tình trạng vỏ hộp bên ngoài. Sau đó, quay lại video trong quá trình mở hộp, và hình dáng bên ngoài của sản phẩm sau khi mở hộp. Nhằm mục đích cung cấp bằng chứng cụ thể, nếu sản phẩm có lỗi về mặt vật lý (móp mép, bể, vỡ..).
              </span>
            </li>
            <li>
              <h1 className='font-bold'>Tôi có thể trả lại sản phẩm khuyến mại không?</h1>
              <span>Bạn có thể trả lại sản phẩm khuyến mại trong trường hợp sản phẩm chính hoặc sản phẩm khuyến mại có lỗi từ phía nhà sản xuất hoặc đơn vị vận chuyển.</span>
            </li>
            <li>
              <h1 className='font-bold'>Tôi sẽ phải làm như thế nào để hoàn đơn hay đổi trả?</h1>
              <span>Nếu sản phẩm bạn nhận được đáp ứng quy định đổi trả của ASUS, xin vui lòng liên hệ chúng tôi trong vòng 7 ngày kể từ ngày bạn nhận được hàng.
                <br/>Hotline: 1800-65-88 (nhấn phím 1 để chọn tiếng Việt, sau đó chọn phím 4 để kết nối trực tiếp tới điện thoại viên). Thời gian làm việc: Thứ 2 -Thứ 7, 09:00 -18:00
                <br/>Chi tiết vui lòng xem thêm tại https://vn.store.asus.com/asus-store-chinh-sach-doi-tra
              </span>
            </li>        
          </ul>
        </div>
           :""}
  
    </div>:""
          }
         
          </div>
  )
}

export default Infoproduct