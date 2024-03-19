export default function Service(){
    const services=[
        {title:'Channel Promotion',
        content : 'Leverage our promotional tools and strategies to increase visibility and attract new subscribers to your Telegram channel.'},
        {title:'Content Optimization',content : "Enhance your channel's content with our optimization techniques to ensure maximum engagement and retention."},
{title:'Analytics and Reporting',content : "Track your channel's performance with comprehensive a1nalytics and reporting tools, allowing you to measure success and make informed decisions."},
{title:'Community Building',content : 'Foster a sense of community among your subscribers with our engagement strategies and community-building initiatives.'}
    ]
    return <section className="page-section" id="services">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Supercharge Your Telegram Channel Subscriptions with TeleSubs</h3>
        </div>
        <div className="row text-center">
            {services.map(service=><div className="col-md-3">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">{service?.title}</h4>
                <p className="text-muted">{service.content}</p>
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