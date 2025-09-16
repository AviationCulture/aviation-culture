import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  Plane, 
  Rocket, 
  Globe, 
  Search, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  Calendar,
  User,
  ArrowUp
} from 'lucide-react'
import './App.css'

// استيراد الصور
import heroPlane from './assets/hero-plane.jpg'
import militaryPlanes from './assets/military-planes.jpg'
import rocket from './assets/rocket.jpg'
import spaceLaunch from './assets/space-launch.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // التحكم في إظهار زر العودة للأعلى
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const featuredArticles = [
    {
      id: 1,
      title: "تاريخ الطيران: من الأحلام إلى الواقع",
      description: "رحلة عبر تاريخ الطيران من محاولات الإنسان الأولى للطيران حتى الطائرات الحديثة",
      image: militaryPlanes,
      category: "تاريخ",
      date: "15 يناير 2024",
      readTime: "8 دقائق"
    },
    {
      id: 2,
      title: "استكشاف الفضاء: المستقبل بين النجوم",
      description: "نظرة على أحدث التطورات في استكشاف الفضاء والمهام المستقبلية للكواكب الأخرى",
      image: rocket,
      category: "فضاء",
      date: "12 يناير 2024",
      readTime: "10 دقائق"
    },
    {
      id: 3,
      title: "تقنيات الطيران الحديثة",
      description: "التقنيات المتطورة التي تشكل مستقبل صناعة الطيران والنقل الجوي",
      image: spaceLaunch,
      category: "تقنية",
      date: "10 يناير 2024",
      readTime: "6 دقائق"
    }
  ]

  const categories = [
    { name: "تاريخ الطيران", icon: Plane, count: 25 },
    { name: "استكشاف الفضاء", icon: Rocket, count: 18 },
    { name: "تقنيات حديثة", icon: Globe, count: 32 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* شريط التنقل */}
      <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* الشعار */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Plane className="h-8 w-8 text-aviation-primary" />
<a href="#" className="flex items-center space-x-2">
    <img src="/images/logo.png" alt="شعار ثقافة الطيران" className="h-8" />
    {/* <span className="text-2xl font-bold gradient-text">ثقافة الطيران</span> */}
</a>            </div>

            {/* القائمة الرئيسية - سطح المكتب */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <a href="#home" className="text-aviation-text hover:text-aviation-primary transition-colors">الرئيسية</a>
              <a href="#articles" className="text-aviation-text hover:text-aviation-primary transition-colors">المقالات</a>
              <a href="#categories" className="text-aviation-text hover:text-aviation-primary transition-colors">الأقسام</a>
              <a href="#about" className="text-aviation-text hover:text-aviation-primary transition-colors">عن الموقع</a>
              <a href="#contact" className="text-aviation-text hover:text-aviation-primary transition-colors">تواصل معنا</a>
            </div>

            {/* البحث وزر القائمة */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="hidden sm:flex items-center">
                <Input 
                  type="search" 
                  placeholder="البحث..." 
                  className="w-48 text-right"
                />
                <Button size="sm" className="mr-2 bg-aviation-primary hover:bg-aviation-secondary">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              {/* زر القائمة للموبايل */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* القائمة المنسدلة للموبايل */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-aviation-text hover:text-aviation-primary transition-colors">الرئيسية</a>
                <a href="#articles" className="text-aviation-text hover:text-aviation-primary transition-colors">المقالات</a>
                <a href="#categories" className="text-aviation-text hover:text-aviation-primary transition-colors">الأقسام</a>
                <a href="#about" className="text-aviation-text hover:text-aviation-primary transition-colors">عن الموقع</a>
                <a href="#contact" className="text-aviation-text hover:text-aviation-primary transition-colors">تواصل معنا</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* القسم الرئيسي */}
      <section id="home" className="hero-section flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroPlane})` }}
        />
        <div className="hero-content text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            ثقافة الطيران
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            استكشف عالم الطيران والفضاء من خلال مقالات وأخبار متخصصة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button className="btn-primary text-lg px-8 py-3">
              استكشف المقالات
              <ChevronRight className="mr-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-aviation-primary">
              تعرف على الموقع
            </Button>
          </div>
        </div>
      </section>

      {/* قسم الأقسام الرئيسية */}
      <section id="categories" className="py-20 bg-aviation-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">أقسام الموقع</h2>
            <p className="text-xl text-aviation-text max-w-2xl mx-auto">
              اكتشف المحتوى المتنوع في مجالات الطيران والفضاء
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="section-card text-center p-8">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-aviation-light rounded-full w-fit">
                    <category.icon className="h-12 w-12 text-aviation-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{category.name}</CardTitle>
                  <CardDescription className="text-lg">
                    {category.count} مقال متاح
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-aviation-primary hover:bg-aviation-secondary">
                    تصفح المقالات
                    <ChevronRight className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* قسم المقالات المميزة */}
      <section id="articles" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">المقالات المميزة</h2>
            <p className="text-xl text-aviation-text max-w-2xl mx-auto">
              اقرأ أحدث المقالات والأخبار في عالم الطيران والفضاء
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="article-card">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-aviation-accent">
                    {article.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 ml-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 ml-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button className="w-full bg-aviation-secondary hover:bg-aviation-primary">
                    اقرأ المقال
                    <ChevronRight className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-primary text-lg px-8 py-3">
              عرض جميع المقالات
            </Button>
          </div>
        </div>
      </section>

      {/* قسم عن الموقع */}
      <section id="about" className="py-20 bg-aviation-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-6">عن موقع ثقافة الطيران</h2>
              <p className="text-lg text-aviation-text mb-6">
                موقع ثقافة الطيران هو منصة متخصصة تهدف إلى نشر المعرفة والثقافة في مجالي الطيران والفضاء. 
                نقدم محتوى عالي الجودة يشمل أحدث الأخبار والتطورات التقنية والتاريخية في هذين المجالين المثيرين.
              </p>
              <p className="text-lg text-aviation-text mb-8">
                من خلال مقالاتنا المتخصصة وتقاريرنا المفصلة، نسعى لتقديم تجربة تعليمية وثقافية غنية 
                لكل من المهتمين والمتخصصين في مجالات الطيران واستكشاف الفضاء.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-aviation-accent ml-2" />
                  <span>محتوى متخصص</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-aviation-accent ml-2" />
                  <span>تحديث مستمر</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-aviation-accent ml-2" />
                  <span>مصادر موثوقة</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={spaceLaunch} 
                alt="استكشاف الفضاء"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* قسم التواصل */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold gradient-text mb-6">تواصل معنا</h2>
          <p className="text-xl text-aviation-text mb-12">
            نحن نرحب بأسئلتكم واقتراحاتكم لتطوير المحتوى وتحسين تجربتكم
          </p>
          
          <Card className="section-card p-8">
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="الاسم الكامل" className="text-right" />
                <Input type="email" placeholder="البريد الإلكتروني" className="text-right" />
              </div>
              <Input placeholder="الموضوع" className="text-right" />
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-md text-right resize-none"
                rows="5"
                placeholder="رسالتك..."
              />
              <Button className="btn-primary w-full text-lg py-3">
                إرسال الرسالة
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* التذييل */}
      <footer className="bg-aviation-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                <Plane className="h-8 w-8" />
                <span className="text-xl font-bold">ثقافة الطيران</span>
              </div>
              <p className="text-gray-300">
                منصة متخصصة في نشر ثقافة الطيران والفضاء
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">الأقسام</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">تاريخ الطيران</a></li>
                <li><a href="#" className="hover:text-white transition-colors">استكشاف الفضاء</a></li>
                <li><a href="#" className="hover:text-white transition-colors">التقنيات الحديثة</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">روابط مهمة</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">تابعنا</h3>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  فيسبوك
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  تويتر
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  يوتيوب
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ثقافة الطيران. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* زر العودة للأعلى */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 rounded-full p-3 bg-aviation-accent hover:bg-aviation-primary shadow-lg"
          size="sm"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}

export default App

