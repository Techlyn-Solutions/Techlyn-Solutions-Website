
const techStack = {
  Languages: ['Python'],
  Libraries: ['LangChain', 'TensorFlow', 'Pandas', 'Scikit-learn'],
  Tools: ['OpenAI', 'Google Colab', 'Hugging Face', 'GitHub'],
  Domains: ['NLP', 'Generative AI', 'CV', 'Task Automation', 'Agentic Workflows'],
};

export const TechStackSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            Our <span className="text-red">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powered by cutting-edge technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, items], index) => (
            <div 
              key={category}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-navy mb-4">{category}</h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <div 
                    key={item}
                    className="bg-gray-100 hover:bg-navy hover:text-white px-3 py-2 rounded-lg text-sm font-medium text-dark-gray transition-all duration-300 cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
