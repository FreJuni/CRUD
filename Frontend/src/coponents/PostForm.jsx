import { Form, useNavigation} from "react-router-dom"


const PostForm = ({title,button,method,post,errArray}) => {

    const navigation = useNavigation();
    const isSubmiting = navigation.state === "submitting";


  return (
    <div className="form-con">
        <h2>{title}</h2>
        <Form method={method}>
            <div className="form-input">
                {errArray && (
                    errArray.map((err,index) => {
                        if(err === "Invalid title.") {
                            return <p key={index} className="error-p">{err}</p>
                        }
                        return null;
                    })
                )}
                <label htmlFor="title">Title</label>
                <input type="text" name="title" defaultValue={post ? post.title : ""} />
            </div>
            <div className="form-input">
                {errArray && (
                    errArray.map((err,index) => {
                        if(err === "Invalid image.") {
                            return <p key={index} className="error-p">{err}</p>   
                        }
                        return null;
                    })
                )}
                <label htmlFor="image">Image Url</label>
                <input type="url" name="image" defaultValue={post ? post.image : ""} />
            </div>
            <div className="form-input">
                {errArray && (
                    errArray.map((err,index) => {
                        if(err === "Invalid date.") {
                            return <p key={index} className="error-p">{err}</p>
                        }
                        return null;
                    })
                )}
                <label htmlFor="date">Date</label>
                <input type="date" name="date" defaultValue={post ? post.date : ""}  />
            </div>
            <div className="form-input">
                {errArray && (
                    errArray.map((err,index) => {
                        if(err === "Invalid description.") {
                            return <p key={index} className="error-p">{err}</p>
                        }
                        return null;
                    })
                )}
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description." defaultValue={post ? post.description : ""} ></textarea>
            </div>
            <button className="post-btn">{isSubmiting ? "Submitting" : button}</button>
        </Form>
    </div>
  )
}

export default PostForm;



