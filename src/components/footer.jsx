import youtube_icon from "../assets/YoutubeLogo.png"
import phone_icon from "../assets/Phone.png"
import instagram_icon from "../assets/InstagramLogo.png"
import mail_icon from "..//assets/EnvelopeSimple.png"

function Footer(){
    return (
        <footer>
            <h3>Jardim do Arendt</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, ducimus deleniti distinctio autem ipsum inventore ipsam incidunt ab labore nobis dolorum deserunt qui optio debitis eligendi?</p>
            <div className="social-media">
                <a href="">
                    <img src={phone_icon} alt="" />
                </a>
                <a href="">
                    <img src={mail_icon} alt="" />
                </a>
                <a href="">
                    <img src={instagram_icon} alt="" />
                </a>
                <a href="">
                    <img src={youtube_icon} alt="" />
                </a>
            </div>

            {/* <div className="credits">
                <small>©jardimdomax, Feito por <span><Thiago></Thiago></span></small>
            </div> */}

        </footer>
    )
}

export default Footer