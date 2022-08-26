let navbar = () => {
    return `<ul>
    <li id="logo"><a href=""><img
                src="https://www.jefit.com/wp/wp-content/uploads/2017/07/cropped-logo_155_40_white-120x31.webp"
                alt="JEFIT"></a></li>
    <li><a href="">Get Jefit App <i class="fa fa-angle-down"></i></a>
        <div class="sub_menu_1">
            <ul>
                <li><a href="">Workout App (iOS)</a></li>
                <li><a href="">Workout App (Android)</a></li>
            </ul>
        </div>
    </li>
    <li><a href="">Workout Plans <i class="fa fa-angle-down"></i></a>
        <div class="sub_menu_1">
            <ul>
                <li><a href="">Pro-designed Plans</a></li>
                <li><a href="">Create My Plans</a></li>
            </ul>
        </div>
    </li>
    <li><a href="">Exercise Guides</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Coach</a></li>
    <li><a href="">Elite</a></li>
    <li><a href="">Login</a></li>
    <li id="signUp"><a href="">Sign Up</a></li>
</ul>`;
}

export {navbar};