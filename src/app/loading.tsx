export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-professional-50 via-primary-50 to-growth-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-growth-400 to-gold-400 rounded-full animate-pulse"></div>
            
            {/* Logo placeholder */}
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <div className="text-2xl font-bold text-primary-600">ZB</div>
            </div>
            
            {/* Rotating ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-primary-500 rounded-full animate-spin"></div>
          </div>
        </div>
        
        {/* Loading text */}
        <h2 className="text-2xl font-bold text-professional-900 mb-4">
          Loading Zero Barriers
        </h2>
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-growth-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Loading message */}
        <p className="text-professional-600 mt-6 max-w-md mx-auto">
          Preparing your revenue transformation journey...
        </p>
      </div>
    </div>
  );
}


