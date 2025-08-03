'use client';

import { 
  MessageCircle, 
  MessageSquare, 
  Phone, 
  PhoneCall, 
  MoreHorizontal,
  Plus,
  HelpCircle,
  Mail,
  Send,
  Info,
  Heart,
  X,
  AlertTriangle,
  Check,
  Code,
  EyeOff
} from 'lucide-react';

export default function TestIcons() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Icônes WhatsApp Disponibles</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">MessageCircle</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">MessageSquare</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Phone size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">Phone</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <PhoneCall size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">PhoneCall</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Mail size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">Mail</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Send size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">Send</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <HelpCircle size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">HelpCircle</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Info size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">Info</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MoreHorizontal size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">MoreHorizontal</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Plus size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">Plus</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">Heart</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <X size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">X</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <AlertTriangle size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">AlertTriangle</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Check size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">Check</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Code size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">Code</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <EyeOff size={32} />
            </div>
            <h3 className="text-sm font-medium text-gray-700">EyeOff</h3>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Code pour utiliser une icône :</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`import { MessageCircle } from 'lucide-react';

<MessageCircle size={24} className="text-white" />`}
          </pre>
        </div>
      </div>
    </div>
  );
} 