export default function WhyUS(){
    



    const promotions=[{
        title:"Targeted Promotion",
        content:"Reach your ideal audience and attract quality subscribers who are genuinely interested in your content or offerings."
    },
    {
        title:"Engaging Content",
        content:"Stand out from the crowd with compelling content that captivates your audience and encourages them to subscribe."
    },
    {
        title:"Data-Driven Insights",
        content:"Gain valuable insights into your channel's performance and audience demographics to inform your growth strategy."
    },
    {
        title:"Personalized Support",
        content:"Receive dedicated support from our team of experts who are committed to helping you achieve your goals and maximize your channel's potential."
    }]
    return <section className="page-section" id="whyus">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase">Why Choose Us?</h2>
            <h3 className="section-subheading text-muted">When you partner with TeleSubs, you'll benefit from:</h3>
        </div>
        <div className="row text-center">
            {promotions.map(promotion=><div className="col-md-3">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">{promotion?.title}</h4>
                <p className="text-muted">{promotion.content}</p>
            </div>)}
            {/* <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Engaging Content</h4>
                <p className="text-muted">Stand out from the crowd with compelling content that captivates your audience and encourages them to subscribe</p>
            </div>
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Data-Driven Insights</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div> */}
        </div>
    </div>
</section>
}