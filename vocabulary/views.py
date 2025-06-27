from rest_framework import viewsets
from .models import VocabularyWord
from .serializers import VocabularySerializer

class VocabularyViewSet(viewsets.ModelViewSet):
    queryset = VocabularyWord.objects.all()
    serializer_class = VocabularySerializer