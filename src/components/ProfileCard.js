function ProfileCard({ title, handle, image }) {
    // const title  = props.title;
    // const handle = props.handle

    //destructuring
    // const {title, handle} = props;
    return (
        <div>

            <div className="card">
                <div className="card-image">
                    <figure class="image is-1by1">
                        <img src={image} alt="pda logo" />
                    </figure>
                    <div className="card-content">
                        <div className="media-content" >
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{handle}</p>
                        </div>

                    </div>
                </div>


            </div>




        </div>

    )

}
export default ProfileCard;