/* ==========================================================================
   THE INFINITY KNOWLEDGE LIBRARY — CONTENT DATA
   Theme: An Intelligent Digital Library Managed by AI Archivists
   All content sourced from the original NLP study guide.
   ========================================================================== */

const LIBRARY_DATA = {

  meta: {
    title: "NLP Knowledge Artifact Repository",
    subtitle: "Exploring Language Through The Infinity Knowledge Library",
    tagline: "An interactive AI-powered educational portal for understanding Language Representation and Language Models.",
    typedStrings: [
      "One-Hot Encoding", "Word Embeddings", "Word2Vec",
      "FastText", "Contextual Embeddings", "Transformers"
    ]
  },

  stats: [
    { value: 21,  suffix: "", label: "Knowledge Artifacts" },
    { value: 13,  suffix: "", label: "Preprocessing & Features" },
    { value: 5,   suffix: "", label: "Representation Methods" },
    { value: 3,   suffix: "", label: "Language Models" },
    { value: 100, suffix: "%", label: "Interactive Learning" }
  ],

  /* Evolution chain shown in the horizontal timeline (Section: AI Archivist Evolution) */
  evolutionChain: ["onehot", "embeddings", "word2vec", "fasttext", "contextual", "transformer"],

  /* Galaxy map orbiting nodes */
  galaxy: [
    { id: "representation", label: "Language Representation", desc: "Five techniques the AI Archivists use to turn visitors — words — into numbers.", target: "#chambers" },
    { id: "models",        label: "Language Models",         desc: "How the library learns to predict what a reader will ask for next.", target: "#chambers" },
    { id: "applications",  label: "Applications",             desc: "Where these techniques serve real readers, in real reading rooms.", target: "#impact" },
    { id: "research",      label: "Research",                  desc: "The decades-long path from frequency tables to self-attention.", target: "#timeline" },
    { id: "sustainability",label: "Sustainability",            desc: "How language understanding widens who the library can serve.", target: "#impact" }
  ],

  /* ---------------------------------------------------------------------
     KNOWLEDGE ARTIFACT CHAMBERS — the 8 core topics
     --------------------------------------------------------------------- */
  topics: [
    {
      id: "segmentation",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(a)",
      title: "Sentence Segmentation",
      cardLabel: "Room Allocation Librarian",
      icon: "fa-scissors",
      analogy: "Room Allocation Librarian",
      definition: "Sentence Segmentation is the process of dividing a large document into individual sentences, usually acting as the very first preprocessing step in NLP.",
      story: "Whenever a new book enters the library, the Room Allocation Librarian divides the book into separate rooms. Each room contains exactly one complete idea. Instead of processing one huge book, the AI now processes one room at a time.",
      purpose: [
        "Identify sentence boundaries",
        "Separate complete ideas",
        "Improve text understanding",
        "Prepare text for further NLP processing"
      ],
      working: [
        { title: "Receive Document", content: "The system receives the complete raw document." },
        { title: "Detect Punctuation", content: "It scans for sentence-ending punctuation like '.', '?' and '!'." },
        { title: "Verify Boundaries", content: "It checks abbreviations (like 'Dr.' or 'p.m.') to ensure they don't trigger false sentence splits." },
        { title: "Create Segments", content: "It splits the document into separate, individual sentence units." }
      ],
      example: "**Input Document:** 'Dr. Sharma arrived at 5 p.m. The ancient manuscript was discovered in a cave. Researchers decoded it carefully.'<br>**Output Sentences:**<br>1. 'Dr. Sharma arrived at 5 p.m.'<br>2. 'The ancient manuscript was discovered in a cave.'<br>3. 'Researchers decoded it carefully.'",
      behindScenes: "Modern NLP systems use rule-based algorithms (like regular expressions), statistical models, or deep learning sentence boundary detectors to distinguish genuine sentence endings from abbreviations, decimals, and special cases.",
      libraryComparison: [
        ["Book", "Document"],
        ["Room", "Sentence"],
        ["Room Allocation Librarian", "Segmentation Algorithm"]
      ],
      advantages: [
        "Separates ideas clearly",
        "Improves sentence-level analysis",
        "Makes further NLP processing easier",
        "Reduces processing complexity"
      ],
      limitations: [
        "Periods inside abbreviations may confuse the model",
        "Different languages follow different punctuation rules and sentence boundaries"
      ],
      applications: [
        "Machine Translation",
        "Text Summarization",
        "Question Answering",
        "Conversational Agents / Chatbots"
      ],
      whenNotToUse: "Not necessary when the input text already contains only a single sentence or for character-level models.",
      takeaway: "Sentence Segmentation is the librarian who builds rooms before arranging visitors."
    },
    {
      id: "tokenization",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(b)",
      title: "Tokenization",
      cardLabel: "Visitor Registration Librarian",
      icon: "fa-qrcode",
      analogy: "Visitor Registration Librarian",
      definition: "Tokenization is the process of breaking text into smaller units called tokens (words, numbers, symbols, or sub-words) for computer processing.",
      story: "Imagine hundreds of visitors entering the library together. The Visitor Registration Librarian separates every visitor and gives each one an individual identity card. Instead of handling one huge crowd, the AI now understands every visitor individually.",
      purpose: [
        "Convert text into manageable pieces",
        "Prepare words for computational analysis",
        "Enable machine learning algorithms",
        "Create ordered token sequences"
      ],
      working: [
        { title: "Receive Sentence", content: "The system takes in a segmented sentence." },
        { title: "Detect Boundaries", content: "It identifies spaces, punctuation, and special characters." },
        { title: "Split Text", content: "It cuts the text at these boundaries to produce individual tokens." },
        { title: "Store Sequence", content: "It outputs the ordered sequence of tokens." }
      ],
      example: "**Input:** 'Satellite images revealed hidden settlements.'<br>**Output:** ['Satellite', 'images', 'revealed', 'hidden', 'settlements']",
      behindScenes: "Modern tokenizers do more than split on spaces. They handle punctuation, contractions (like 'don't' to 'do' and 'n't'), and break words into sub-words (like Byte-Pair Encoding or WordPiece) to generate tokens for Transformer models like BERT and GPT.",
      libraryComparison: [
        ["Crowd", "Text"],
        ["Individual Visitor", "Token"],
        ["Identity Card", "Token ID"],
        ["Visitor Registration Librarian", "Tokenizer"]
      ],
      advantages: [
        "Simplifies text representation",
        "Forms the foundation of every downstream NLP task",
        "Improves computational efficiency",
        "Supports deep learning models"
      ],
      limitations: [
        "Word boundaries are difficult to detect in languages without spaces (like Chinese or Japanese)",
        "Ambiguous punctuation can create incorrect token splits"
      ],
      applications: [
        "Search Engines",
        "Language Models",
        "Chatbots",
        "Text Classification",
        "Machine Translation"
      ],
      whenNotToUse: "Rarely skipped except when performing raw character-level or byte-level analysis.",
      takeaway: "Tokenization transforms one large crowd into individually identifiable visitors."
    },
    {
      id: "case_normalization",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(c)",
      title: "Case Normalization",
      cardLabel: "Uniform Designer Librarian",
      icon: "fa-font",
      analogy: "Uniform Designer Librarian",
      definition: "Case Normalization converts all words into a common letter case (usually lowercase) to remove duplicate representations and ensure consistency.",
      story: "Visitors enter the library wearing different colored uniforms. The Uniform Designer Librarian changes every uniform to exactly the same color. Now the AI knows that 'Library', 'LIBRARY', and 'library' are actually the same visitor.",
      purpose: [
        "Reduce duplicate vocabulary",
        "Improve consistency",
        "Reduce memory usage",
        "Increase processing speed"
      ],
      working: [
        { title: "Receive Tokens", content: "The system receives the tokenized text." },
        { title: "Scan Characters", content: "It checks each character for uppercase letters." },
        { title: "Convert Case", content: "It maps uppercase letters to their lowercase equivalents." },
        { title: "Output Normalized Text", content: "It outputs the standardized lowercase tokens." }
      ],
      example: "**Input:** 'Archive ARCHIVE archive'<br>**Output:** ['archive', 'archive', 'archive']",
      behindScenes: "Case normalization significantly reduces vocabulary size. Instead of storing separate entries for 'Library', 'LIBRARY', and 'library', the AI stores only one version. However, special care is needed for certain acronyms or languages with case-dependent rules.",
      libraryComparison: [
        ["Colored Uniforms", "Mixed Case Text"],
        ["Same Uniform", "Lowercase Text"],
        ["Uniform Designer Librarian", "Case Normalizer"]
      ],
      advantages: [
        "Reduces vocabulary redundancy",
        "Smaller vocabulary size",
        "Less memory consumption",
        "Faster NLP processing"
      ],
      limitations: [
        "Proper noun information may disappear",
        "Capitalization sometimes carries critical meaning (e.g., 'May' the month vs. 'may' the verb)"
      ],
      applications: [
        "Information Retrieval",
        "Search Systems",
        "Document Classification",
        "Machine Learning Pipelines"
      ],
      whenNotToUse: "Avoid in Named Entity Recognition (NER), Sentiment Analysis, or Part-of-Speech tagging where capitalization provides important clues.",
      takeaway: "Case Normalization gives every visitor the same uniform before entering the library."
    },
    {
      id: "stopword_removal",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(d)",
      title: "Stop-word Removal",
      cardLabel: "Crowd Control Librarian",
      icon: "fa-filter",
      analogy: "Crowd Control Librarian",
      definition: "Stop-word Removal filters out frequently occurring words that carry little informational value, such as 'the', 'is', 'of', 'an', and 'to'.",
      story: "The Crowd Control Librarian filters out visitors asking only very common, uninformative questions, allowing researchers in the reading room to focus on the visitors carrying unique and important messages.",
      purpose: [
        "Remove unnecessary words",
        "Focus on meaningful information",
        "Improve computational efficiency",
        "Reduce vocabulary dimensionality"
      ],
      working: [
        { title: "Load Stop-word List", content: "The system loads a predefined list of common stop-words (e.g. 'the', 'is', 'at')." },
        { title: "Scan Tokens", content: "It iterates through each token in the document." },
        { title: "Match & Filter", content: "It compares each token with the list and discards matching stop-words." },
        { title: "Output Cleaned Tokens", content: "It returns only the remaining high-value tokens." }
      ],
      example: "**Input:** 'The catalog of the library contains the history of navigation.'<br>**Output:** ['catalog', 'library', 'contains', 'history', 'navigation']",
      behindScenes: "Stop-words are domain-dependent. While standard lists exist, custom stop-words are often created. Removing stop-words reduces the feature matrix size, making classic models run much faster and focus on semantic keywords.",
      libraryComparison: [
        ["Common Visitors", "Stop-words"],
        ["Unique Researchers", "Content Words"],
        ["Crowd Control Librarian", "Stop-word Filter"]
      ],
      advantages: [
        "Speeds up processing",
        "Reduces dataset noise",
        "Improves keyword focus",
        "Decreases feature vector size"
      ],
      limitations: [
        "Important context may disappear",
        "Removing words like 'not' or 'no' can completely reverse the sentence meaning"
      ],
      applications: [
        "Search Engines",
        "Document Retrieval",
        "Topic Modeling",
        "Keyword Extraction"
      ],
      whenNotToUse: "Avoid in Sentiment Analysis, Question Answering, or Neural Language Models where grammatical structure and relational words affect the meaning.",
      takeaway: "Stop-word Removal politely asks unhelpful visitors to leave the queue."
    },
    {
      id: "stemming",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(e)",
      title: "Stemming",
      cardLabel: "Nickname Librarian",
      icon: "fa-scissors",
      analogy: "Nickname Librarian",
      definition: "Stemming reduces words to a base or root form by stripping prefixes or suffixes. The resulting stem may not always be a valid dictionary word.",
      story: "The Nickname Librarian gives every visitor a short nickname by cutting off the endings of their names (e.g., 'cataloging', 'cataloged', 'catalogs' all become 'catalog'). This allows for fast indexing by root names.",
      purpose: [
        "Reduce vocabulary size",
        "Group word variations under a single root",
        "Improve information retrieval recall"
      ],
      working: [
        { title: "Detect Suffix", content: "The algorithm identifies common grammatical suffixes like '-ing', '-ed', or '-s'." },
        { title: "Apply Rules", content: "It applies heuristic rules (e.g. Porter or Snowball stemming rules) to strip or rewrite the suffix." },
        { title: "Generate Stem", content: "It outputs the reduced root word (stem)." }
      ],
      example: "**Input:** ['cataloging', 'cataloged', 'catalogs']<br>**Output:** ['catalog', 'catalog', 'catalog']",
      behindScenes: "Stemming uses crude, rule-based heuristics. For example, 'studies' might stem to 'studi' and 'studying' to 'studi'. Because it doesn't consult a dictionary, it's very fast but can result in non-words.",
      libraryComparison: [
        ["Full Name", "Inflected Word"],
        ["Short Nickname", "Word Stem"],
        ["Nickname Librarian", "Stemming Algorithm"]
      ],
      advantages: [
        "Significantly smaller vocabulary",
        "Extremely fast execution",
        "Improves search retrieval by matching root concepts"
      ],
      limitations: [
        "Produces invalid or non-dictionary words",
        "Can over-stem (merge unrelated words, like 'organization' and 'organ' to 'organ') or under-stem (fail to merge related words)"
      ],
      applications: [
        "Search Engines",
        "Document Clustering",
        "Information Retrieval Systems"
      ],
      whenNotToUse: "Avoid when grammatically correct words are required, or when precise semantic meaning is critical.",
      takeaway: "Stemming creates quick nicknames for visitors."
    },
    {
      id: "lemmatization",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(f)",
      title: "Lemmatization",
      cardLabel: "Identity Verification Librarian",
      icon: "fa-address-book",
      analogy: "Identity Verification Librarian",
      definition: "Lemmatization converts inflected forms of a word to their correct dictionary base form (lemma) by using morphological analysis and dictionary lookups.",
      story: "The Identity Verification Librarian checks official records, analyzes the context in which the visitor arrived, and restores every visitor's official dictionary name, ensuring perfect accuracy.",
      purpose: [
        "Preserve correct dictionary forms",
        "Reduce word variations accurately",
        "Improve semantic understanding in NLP pipelines"
      ],
      working: [
        { title: "Identify Token & Context", content: "The system receives a word and its surrounding sentence context." },
        { title: "Determine Part of Speech", content: "It identifies whether the word is a noun, verb, adjective, etc." },
        { title: "Consult Lexicon", content: "It looks up the word in a linguistic database (e.g., WordNet)." },
        { title: "Generate Lemma", content: "It retrieves and outputs the correct base form (e.g., 'running' becomes 'run')." }
      ],
      example: "**Input:** ['running', 'better', 'studies']<br>**Output:** ['run', 'good', 'study']",
      behindScenes: "Unlike stemming, lemmatization respects grammar. It knows that 'saw' in 'I saw a movie' is the verb 'see', while 'saw' in 'He used a saw' is the noun 'saw'. This requires POS tagging and morphological rules.",
      libraryComparison: [
        ["Alias / Variant Name", "Inflected Word"],
        ["Official Legal Name", "Lemma"],
        ["Identity Verification Librarian", "Lemmatizer"]
      ],
      advantages: [
        "Produces grammatically correct dictionary words",
        "Maintains superior semantic relationships",
        "More accurate than stemming"
      ],
      limitations: [
        "Slower and computationally heavier than stemming",
        "Requires comprehensive language dictionaries and POS taggers"
      ],
      applications: [
        "Chatbots",
        "Question Answering Systems",
        "Semantic Search",
        "Information Retrieval"
      ],
      whenNotToUse: "Avoid in real-time systems with severe memory or processing constraints where stemming suffices.",
      takeaway: "Lemmatization restores every visitor's official identity."
    },
    {
      id: "noise_removal",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(g)",
      title: "Noise Removal",
      cardLabel: "Cleaning Librarian",
      icon: "fa-broom",
      analogy: "Cleaning Librarian",
      definition: "Noise Removal eliminates unwanted text elements such as HTML tags, URLs, punctuation, emojis, special symbols, and extra spaces that do not add value.",
      story: "Before placing a book on the library shelves, the Cleaning Librarian brushes off dust, peels off old stickers, and wipes away stains. Only the clean, readable text remains for the readers.",
      purpose: [
        "Remove non-textual characters",
        "Improve text readability and quality",
        "Reduce downstream processing errors",
        "Prepare raw text for NLP models"
      ],
      working: [
        { title: "Receive Raw Text", content: "The system ingests raw, scraped, or uncleaned text." },
        { title: "Match Patterns", content: "It scans for tags, URLs, emojis, and punctuation using patterns." },
        { title: "Strip Noise", content: "It deletes these matched elements and collapses extra spaces." },
        { title: "Output Clean Text", content: "It returns a stripped, plain text string." }
      ],
      example: "**Input:** 'Visit https://library.com!! 📚 The AI Library is amazing!!!'<br>**Output:** 'Visit The AI Library is amazing'",
      behindScenes: "Regular expressions (Regex) are the workhorses of Noise Removal. Developers craft regex patterns to target specific HTML tags (`<p>`, `<div>`), markdown, links, or special unicode characters, scrubbing the text clean.",
      libraryComparison: [
        ["Dirt / Sticker / Dust", "Punctuation / HTML / URLs"],
        ["Clean Book Pages", "Stripped Plain Text"],
        ["Cleaning Librarian", "Noise Filter / Regex"]
      ],
      advantages: [
        "Results in cleaner text",
        "Improves downstream model accuracy",
        "Eliminates parsing errors",
        "Reduces dataset file size"
      ],
      limitations: [
        "Can accidentally remove useful symbols",
        "Writing correct regex patterns for all edge cases can be complex"
      ],
      applications: [
        "Web Scraping Pipelines",
        "Social Media Sentiment Analysis",
        "Email Spam Detection",
        "Document Analysis"
      ],
      whenNotToUse: "Do not use if punctuation or emojis carry critical semantic meaning (e.g. sentiment analysis where '!!!' or '😢' shows strong emotion).",
      takeaway: "Noise Removal cleans every book before it enters the library."
    },
    {
      id: "text_cleaning",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(h)",
      title: "Text Cleaning",
      cardLabel: "Restoration Librarian",
      icon: "fa-sparkles",
      analogy: "Restoration Librarian",
      definition: "Text Cleaning is the complete preprocessing pipeline that combines noise removal, case normalization, stop-word removal, and normalization (stemming/lemmatization) to prepare raw text for NLP tasks.",
      story: "The Restoration Librarian performs a comprehensive cleanup: repairing pages, removing stains, straightening text, and matching vocabulary. By the end, a damaged book is fully prepared for cataloging.",
      purpose: [
        "Prepare high-quality text for feature extraction",
        "Ensure consistent text representation",
        "Boost machine learning model performance",
        "Minimize vocabulary noise"
      ],
      working: [
        { title: "Strip Noise", content: "Remove HTML tags, URLs, punctuation, and extra whitespace." },
        { title: "Normalize Case", content: "Convert all remaining text to lowercase." },
        { title: "Tokenize & Filter", content: "Split the text into tokens and remove stop-words." },
        { title: "Reduce Words", content: "Apply stemming or lemmatization to map words to their root forms." }
      ],
      example: "**Input:** 'THE Library!!! contains many books...'<br>**Output:** 'library contains many book' (using Lemmatization)",
      behindScenes: "In production, Text Cleaning is implemented as a reusable pipeline class in frameworks like scikit-learn, SpaCy, or NLTK. This ensures that training data and real-world user queries are cleaned in the exact same way.",
      libraryComparison: [
        ["Damaged / Dusty Book", "Raw Scrap Text"],
        ["Fully Restored Book", "Fully Preprocessed Text"],
        ["Restoration Librarian", "Preprocessing Pipeline"]
      ],
      advantages: [
        "Ensures consistent input data",
        "Substantially improves model performance",
        "Simplifies downstream feature extraction"
      ],
      limitations: [
        "Over-cleaning can strip away crucial contextual signals",
        "Pipelines can be slow on very large text corpora"
      ],
      applications: [
        "Machine Learning Pipelines",
        "Text Classification Tasks",
        "Search and Retrieval Indexes",
        "Recommendation Engines"
      ],
      whenNotToUse: "Avoid excessive cleaning when training modern large-scale generative Transformers (like GPT) which learn better from raw, natural text with capitalization and punctuation.",
      takeaway: "Text Cleaning prepares every book for permanent storage."
    },
    {
      id: "bow",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(i)",
      title: "Bag of Words (BoW)",
      cardLabel: "Catalog Librarian",
      icon: "fa-bag-shopping",
      analogy: "Catalog Librarian",
      definition: "Bag of Words is a basic feature engineering technique that represents text by counting the occurrence of words within a document, completely ignoring grammar and word order.",
      story: "The Catalog Librarian keeps index cards counting how many times each visitor appears in a room, without recording where they stood or who they talked to. It creates a simple summary based purely on presence counts.",
      purpose: [
        "Convert text documents into numerical vectors",
        "Prepare numerical features for machine learning",
        "Build simple search and classification baselines",
        "Track keyword occurrences"
      ],
      working: [
        { title: "Build Vocabulary", content: "Compile a list of all unique words across all documents." },
        { title: "Create Vector Template", content: "Set up an empty vector of size equal to the vocabulary size." },
        { title: "Count Frequencies", content: "For a given document, count the frequency of each vocabulary word." },
        { title: "Generate Document Vector", content: "Fill the template with counts to represent the document." }
      ],
      example: "**Documents:**<br>Doc 1: 'AI improves education'<br>Doc 2: 'AI improves healthcare'<br>**Vocabulary:** ['AI', 'improves', 'education', 'healthcare']<br>**Vectors:**<br>Doc 1: [1, 1, 1, 0]<br>Doc 2: [1, 1, 0, 1]",
      behindScenes: "BoW represents text as a matrix where rows are documents and columns are unique vocabulary words. For large datasets, this matrix is sparse (mostly zeros), which requires specialized memory storage.",
      libraryComparison: [
        ["Book Content", "Text Document"],
        ["Index Card of Word Counts", "BoW Vector"],
        ["Catalog Librarian", "BoW Vectorizer"]
      ],
      advantages: [
        "Very simple to implement",
        "Fast to calculate",
        "Works remarkably well for basic classification (like spam detection)"
      ],
      limitations: [
        "Ignores word order and grammar",
        "Produces highly sparse matrices",
        "Cannot capture word meanings or synonyms (e.g. 'good' and 'great' are treated as completely distinct)"
      ],
      applications: [
        "Spam Classification",
        "Basic Sentiment Analysis",
        "Document Clustering",
        "Search Engines"
      ],
      whenNotToUse: "Do not use when sentence structure, syntax, word order, or deep semantic context are required for the task.",
      takeaway: "Bag of Words transforms books into numerical catalog cards."
    },
    {
      id: "ngrams",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(j)",
      title: "N-Grams",
      cardLabel: "Sequence Librarian",
      icon: "fa-link",
      analogy: "Sequence Librarian",
      definition: "N-Grams are contiguous sequences of N items (words or characters) from a given text, used to preserve local word order and context.",
      story: "Instead of counting individual visitors, the Sequence Librarian records groups of visitors who usually arrive together in pairs (Bigrams) or trios (Trigrams), capturing their relationships.",
      purpose: [
        "Preserve word order context",
        "Identify common multi-word phrases",
        "Improve sentence completion models",
        "Enhance text prediction"
      ],
      working: [
        { title: "Tokenize Text", content: "Break the sentence down into individual word tokens." },
        { title: "Set Window Size", content: "Choose N (1 for Unigram, 2 for Bigram, 3 for Trigram)." },
        { title: "Slide Window", content: "Move a sliding window across the tokens, grouping N consecutive words." },
        { title: "Store N-Grams", content: "Collect all unique sequences and count their occurrences." }
      ],
      example: "**Input:** 'Artificial Intelligence improves education'<br>**Unigrams (N=1):** ['Artificial', 'Intelligence', 'improves', 'education']<br>**Bigrams (N=2):** ['Artificial Intelligence', 'Intelligence improves', 'improves education']<br>**Trigrams (N=3):** ['Artificial Intelligence improves', 'Intelligence improves education']",
      behindScenes: "By choosing N > 1, models can distinguish phrases like 'not good' from 'good'. However, the vocabulary size grows exponentially with N, leading to extremely high dimensional vectors and sparsity issues.",
      libraryComparison: [
        ["Single Visitor", "Unigram"],
        ["Pair of Visitors", "Bigram"],
        ["Trio of Visitors", "Trigram"],
        ["Sequence Librarian", "N-Gram Generator"]
      ],
      advantages: [
        "Captures local word order and phrase context",
        "Simple mathematical extension of Bag of Words",
        "Improves autocomplete and speech models"
      ],
      limitations: [
        "Vocabulary size explodes as N increases",
        "Requires substantial memory",
        "Sparsity makes estimation difficult for rare sequences"
      ],
      applications: [
        "Autocomplete Systems",
        "Spell Checkers",
        "Text Generation",
        "Speech Recognition"
      ],
      whenNotToUse: "Avoid high N values (N > 4) on small datasets due to the severe data sparsity and memory explosion.",
      takeaway: "The Sequence Librarian remembers visitors who usually arrive together."
    },
    {
      id: "tf",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(k)",
      title: "Term Frequency (TF)",
      cardLabel: "Counting Librarian",
      icon: "fa-calculator",
      analogy: "Counting Librarian",
      definition: "Term Frequency measures how frequently a term occurs in a document, showing its localized importance within that specific text.",
      story: "The Counting Librarian walks through a room and counts how many times a particular visitor speaks. If a visitor speaks very often in a room, the librarian assumes they are highly important to that specific room's discussion.",
      purpose: [
        "Measure word occurrence rate",
        "Normalize counts for document length",
        "Form the foundation of TF-IDF vectors"
      ],
      working: [
        { title: "Count Word Occurrences", content: "Count the number of times the target word appears in the document." },
        { title: "Count Total Words", content: "Determine the total number of words in the document." },
        { title: "Normalize", content: "Divide the word count by the total word count to prevent bias towards long documents." },
        { title: "Output TF", content: "Store the resulting fractional value." }
      ],
      example: "**Document:** 'AI improves AI education'<br>**Word:** 'AI'<br>**Calculation:** Occurs 2 times out of 4 total words.<br>**Term Frequency (TF):** 2/4 = 0.50",
      behindScenes: "There are several ways to compute TF, including raw count, term frequency relative to document length (most common), log-scaled frequency, and double-normalization to prevent length bias.",
      libraryComparison: [
        ["Spoken Word Count", "Term Occurrence Count"],
        ["Total Room Conversation", "Total Document Words"],
        ["Counting Librarian", "TF Calculator"]
      ],
      advantages: [
        "Simple and intuitive",
        "Fast to compute",
        "Normalizes for document length variations"
      ],
      limitations: [
        "Common words (like 'the', 'is') will naturally have the highest TF, even though they contain the least information"
      ],
      applications: [
        "Search Engines",
        "Information Retrieval",
        "Text Mining Baseline Features"
      ],
      whenNotToUse: "Do not use TF alone for document search ranking without inverse document frequency, otherwise common words will dominate results.",
      takeaway: "The Counting Librarian records visitor frequency."
    },
    {
      id: "idf",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(l)",
      title: "Inverse Document Frequency (IDF)",
      cardLabel: "Importance Librarian",
      icon: "fa-gem",
      analogy: "Importance Librarian",
      definition: "Inverse Document Frequency measures how rare or unique a word is across an entire collection of documents, assigning higher weights to rare words.",
      story: "The Importance Librarian watches the entire library system. If a visitor (like 'the') is seen in every room, they receive low priority. But if a visitor (like 'quantum') is seen in only one room, they receive extremely high priority as they represent a highly specific topic.",
      purpose: [
        "Evaluate word rarity across a corpus",
        "Penalize common words",
        "Help identify search query keywords that carry the most meaning"
      ],
      working: [
        { title: "Count Total Documents", content: "Determine the total number of documents in the collection (N)." },
        { title: "Count Matching Documents", content: "Count how many documents contain the target word (DF)." },
        { title: "Calculate Ratio", content: "Divide total documents by matching documents (N / DF)." },
        { title: "Apply Logarithm", content: "Take the logarithm of this ratio to compress the values." }
      ],
      example: "**Total Documents (N):** 100<br>**Documents containing 'AI' (DF):** 10<br>**Calculation:** IDF = log(100 / 10) = log(10) = 1.00",
      behindScenes: "IDF prevents common words from drowning out unique keywords in searches. If a word appears in every document, its IDF is log(1) = 0, meaning it gets completely ignored in calculations, which acts as an automatic stop-word filter.",
      libraryComparison: [
        ["All Rooms", "Total Document Corpus"],
        ["Rooms containing Visitor", "Document Frequency"],
        ["Importance Librarian", "IDF Calculator"]
      ],
      advantages: [
        "Effectively isolates highly informative terms",
        "Significantly improves document search relevance",
        "Runs independently of individual document length"
      ],
      limitations: [
        "Requires the entire collection of documents to compute",
        "Does not capture word-specific meaning, only rarity"
      ],
      applications: [
        "Search Engines",
        "Document Retrieval Systems",
        "Recommendation Engines"
      ],
      whenNotToUse: "Do not use IDF on its own, as it only measures global term rarity and knows nothing about the local relevance in a specific document.",
      takeaway: "The Importance Librarian rewards rare visitors."
    },
    {
      id: "tfidf",
      section: "Text Preprocessing & Feature Engineering",
      code: "2(m)",
      title: "TF-IDF",
      cardLabel: "Master Catalog Librarian",
      icon: "fa-chart-pie",
      analogy: "Master Catalog Librarian",
      definition: "TF-IDF (Term Frequency-Inverse Document Frequency) multiplies a word's local term frequency by its global inverse document frequency to measure its overall importance in a specific document relative to a corpus.",
      story: "The Master Catalog Librarian determines a visitor's importance in a room by combining two factors: how often they speak in this room (TF) and how rare they are across the entire library (IDF). A visitor speaking often about a rare topic becomes the room's main subject.",
      purpose: [
        "Generate weighted numerical vectors for text",
        "Extract key signature words from documents",
        "Rank search results by relevance",
        "Improve classification models"
      ],
      working: [
        { title: "Calculate TF", content: "Determine how often the word appears in the current document." },
        { title: "Calculate IDF", content: "Determine the rarity of the word across the whole corpus." },
        { title: "Multiply Values", content: "Multiply TF by IDF to get the final weight (TF-IDF = TF × IDF)." },
        { title: "Build Feature Vector", content: "Repeat for all vocabulary words to create the document's signature vector." }
      ],
      example: "**Word:** 'AI'<br>**Term Frequency (TF):** 0.50 (in current document)<br>**Inverse Document Frequency (IDF):** 1.20 (in corpus)<br>**TF-IDF Weight:** 0.50 × 1.20 = 0.60",
      behindScenes: "TF-IDF is the cornerstone of traditional text search and classification. By weighting words based on document frequency, it ensures that search terms that are both relevant locally and rare globally rank highest. Vector space comparisons (like cosine similarity) are then used to match documents.",
      libraryComparison: [
        ["Room-Specific Conversation", "TF Component"],
        ["Global Library Rarity", "IDF Component"],
        ["Signature Book Summary", "TF-IDF Vector"],
        ["Master Catalog Librarian", "TF-IDF Vectorizer"]
      ],
      advantages: [
        "Balances local and global word importance",
        "Saves computational power compared to deep learning",
        "Excellent for search engines and keyword extraction",
        "Dramatically reduces impact of common words"
      ],
      limitations: [
        "Ignores semantic relationships (treats synonyms as completely unrelated)",
        "Ignores word order and grammatical structure",
        "Produces high-dimensional sparse vectors"
      ],
      applications: [
        "Search Engines",
        "Document Classification",
        "Recommendation Systems",
        "Spam Filtering",
        "Keyword Extraction"
      ],
      whenNotToUse: "Avoid when deep semantic matching, contextual nuances, or sentence-level relationships are needed. Dynamic Contextual Embeddings (like Transformers) should be used instead.",
      takeaway: "TF-IDF creates the final intelligent catalog used by the AI Library."
    },
    {
      id: "onehot",
      section: "Language Representation",
      code: "3(a)",
      title: "One-Hot Encoding",
      cardLabel: "Digital Identity Card System",
      icon: "fa-id-card",
      analogy: "Membership Card",
      definition: "One-Hot Encoding is the simplest method of representing words in NLP. Every unique word is assigned a vector in which only one position contains 1, and every other position contains 0. The position containing 1 uniquely identifies the word — like assigning every visitor in the library a locker where only one locker is marked as occupied.",
      story: "When the Infinity Knowledge Library first opened, every visitor received a membership card: Physics → 10000, Chemistry → 01000, Biology → 00100, Mathematics → 00010, Robotics → 00001. The system could answer \"who is this visitor?\" perfectly. But it could never answer what a visitor studies, which visitors share interests, or who visits together. Identification alone was not enough.",
      purpose: [
        "Convert text into numbers",
        "Assign unique identities to words",
        "Allow computers to recognize individual words",
        "Prepare textual data for machine learning algorithms",
        "Serve as the first step toward language understanding"
      ],
      working: [
        { title: "Build the Vocabulary", content: "The AI Archivists read every book and extract every unique word — e.g. Renewable, Energy, Saves, Resources, Technology, Creates, Opportunities, Smart, Farming, Water." },
        { title: "Assign an Index", content: "Each word receives a unique numerical position: Renewable → 1, Energy → 2, Saves → 3 … Water → 10." },
        { title: "Generate One-Hot Vectors", content: "Renewable → [1 0 0 0 0 0 0 0 0 0], Energy → [0 1 0 0 0 0 0 0 0 0], Saves → [0 0 1 0 0 0 0 0 0 0], Smart → [0 0 0 0 0 0 0 1 0 0]." },
        { title: "Convert Entire Sentences", content: "\"Renewable Energy Saves Resources\" becomes a sequence of four separate one-hot vectors — the computer now processes numbers instead of text." }
      ],
      example: "An AI Research Library for Environmental Studies stores books on Rainwater Harvesting, Solar Energy, Wind Turbines, Water Conservation and Green Buildings. Each keyword gets its own one-hot vector — Rainwater → 10000, Solar → 01000, Wind → 00100. A search for \"Solar\" is instantly recognized by its vector, but the system still can't tell that Solar and Wind both belong to renewable energy.",
      behindScenes: "While a reader just sees a search result, the AI reads every document, identifies unique words, removes duplicates, assigns an index to each, creates a vector of zeros, places a single 1 at the assigned position, and stores the vectors for later use. It doesn't know what \"Solar\" or \"Wind\" mean — only their numerical identity.",
      libraryComparison: [
        ["Visitor", "Word"],
        ["Membership Card", "One-Hot Vector"],
        ["Card Number", "Index"],
        ["Highlighted Slot", "Value = 1"],
        ["Empty Slots", "Value = 0"]
      ],
      advantages: ["Extremely simple to understand", "Easy to implement", "Every word receives a unique identity", "Suitable for learning basic NLP concepts", "Works well for very small vocabularies"],
      limitations: ["Produces very large vectors for large vocabularies", "Consumes significant memory", "Cannot capture the meaning of words", "Does not show relationships between words", "New words require rebuilding the vocabulary"],
      applications: ["Educational NLP projects", "Introductory machine learning experiments", "Small text classification tasks", "Rule-based systems", "Demonstrating basic language representation concepts"],
      whenNotToUse: "Avoid One-Hot Encoding when the vocabulary is very large, memory efficiency matters, you need semantic relationships, or the task requires contextual understanding. Word Embeddings, Word2Vec, or Contextual Embeddings are far more effective in those cases.",
      takeaway: "One-Hot Encoding gives every visitor in the AI Digital Library a unique membership card. It tells the librarian who the visitor is — but nothing about their interests, friendships, or research goals."
    },

    {
      id: "embeddings",
      section: "Language Representation",
      code: "3(b)",
      title: "Word Embeddings",
      cardLabel: "The Intelligent Visitor Profile",
      icon: "fa-user-astronaut",
      analogy: "Visitor Profile",
      definition: "Word Embeddings are dense numerical vectors that represent words such that words with similar meanings have similar vector values. Instead of assigning only a unique identity, embeddings capture the meaning and relationship between words.",
      story: "The library upgraded its system: instead of an identity card, every visitor now receives an Intelligent Research Profile. A Solar Energy Researcher and a Wind Energy Researcher both read Engineering books and visit the Environmental Science section — so the AI librarian stores their profiles close together. That closeness, learned from behaviour rather than declared identity, is exactly how Word Embeddings work.",
      purpose: ["Represent words using compact numerical vectors", "Capture semantic relationships between words", "Reduce memory consumption", "Help AI understand similar words", "Improve the performance of NLP applications"],
      working: [
        { title: "Read Thousands of Books", content: "The AI librarian studies millions of books: Solar Energy, Wind Energy, Renewable Energy, Hydroelectric Energy." },
        { title: "Observe Neighbouring Words", content: "Solar, Wind and Hydroelectric all appear with Energy — so the AI infers they are related." },
        { title: "Create Dense Vectors", content: "Compact vectors replace long sparse ones — Solar → [0.81, 0.24, 0.75], Wind → [0.79, 0.26, 0.73], River → [0.11, 0.90, 0.32]. Solar and Wind land close together." },
        { title: "Store Similar Words Together", content: "The librarian forms sections — an Energy section (Solar, Wind, Battery, Hydrogen) and an Agriculture section (Crop, Soil, Irrigation, Farmer) — keeping related words near one another." }
      ],
      example: "In a National Agriculture Digital Library holding Soil Health, Smart Irrigation, Crop Monitoring and Water Conservation, a search for \"Irrigation\" also surfaces Water Conservation and Smart Farming, because their embeddings sit close together in meaning-space.",
      behindScenes: "The AI librarian never opens a dictionary. It watches how words behave across millions of books, and words that appear in similar contexts gradually drift closer together inside a mathematical space — like observing readers for years and learning their interests without ever asking directly.",
      libraryComparison: [
        ["Membership Card", "One-Hot Vector"],
        ["Basic Visitor Record", "Word Identity"],
        ["Research Profile", "Dense Embedding"],
        ["Nearby Profiles", "Similar Meanings"],
        ["Catalog Shelf", "Semantic Space"]
      ],
      advantages: ["Captures word meaning", "Similar words receive similar vectors", "Requires less memory than One-Hot Encoding", "Improves search accuracy", "Works well with deep learning"],
      limitations: ["Every word has only one vector", "Cannot distinguish multiple meanings of the same word", "Needs large training data", "Rare words may have poor representations"],
      applications: ["Search Engines", "Chatbots", "Machine Translation", "Document Recommendation", "Question Answering", "Digital Libraries"],
      whenNotToUse: "Word Embeddings struggle when a word changes meaning with context — \"Bank\" as a River Bank and a Financial Bank both receive the exact same vector.",
      takeaway: "Word Embeddings give every visitor in the AI library a detailed research profile instead of just a membership card."
    },

    {
      id: "word2vec",
      section: "Language Representation",
      code: "3(c)",
      title: "Word2Vec",
      cardLabel: "Learning Through Observation",
      icon: "fa-brain",
      analogy: "Learning Through Friends",
      definition: "Word2Vec is a machine learning technique that automatically learns Word Embeddings by observing how words appear together in sentences — instead of manually assigning vectors, it lets the AI librarian learn from experience.",
      story: "A new AI librarian named Aarav doesn't read visitor profiles — he simply observes. He notices Astronomy readers often borrow Telescope books, Medicine students frequent Anatomy, and Programming readers usually reach for Data Structures. After months of watching, Aarav naturally learns which visitors are closely related. That is exactly how Word2Vec works.",
      purpose: ["Learn meaningful word representations", "Discover relationships between words", "Improve semantic understanding", "Reduce manual feature engineering", "Support advanced NLP applications"],
      working: [
        { title: "CBOW — Continuous Bag of Words", content: "The AI predicts a missing word from its surroundings: \"Solar ____ produces electricity\" → predicts Energy." },
        { title: "Skip-Gram", content: "Given one word, e.g. Energy, the model predicts its likely neighbours: Solar, Wind, Renewable, Electricity." },
        { title: "Repeated Exposure", content: "Reading Drone-based Crop Monitoring, Smart Irrigation Systems, Precision Agriculture and Soil Moisture Analysis repeatedly, the AI notices Crop, Soil, Moisture and Irrigation keep appearing together, and their vectors gradually converge." }
      ],
      example: "Across a digital library's agriculture collection, Word2Vec learns that Crop, Soil, Moisture and Irrigation share context so often that they develop similar vector representations — without anyone hand-labelling the relationship.",
      behindScenes: "Internally, Word2Vec trains a small neural network. Vectors start random; after reading millions of sentences, words that appear in similar contexts slowly move closer together. The AI librarian is learning through observation, just like a human trainee.",
      libraryComparison: [
        ["Observed Friends", "Co-occurring Words"],
        ["Learning from Behaviour", "Training Objective"],
        ["Static Visitor Profile", "Word Vector"],
        ["Friends in the Same Room", "Similar Context"],
        ["Human Trainee", "Neural Learner"]
      ],
      advantages: ["Learns automatically from text", "Produces meaningful vectors", "Fast training", "Handles large datasets efficiently", "Excellent semantic understanding"],
      limitations: ["One vector per word", "Cannot understand context", "Rare words are difficult to learn", "Needs large text corpora"],
      applications: ["Intelligent Search", "Recommendation Systems", "Machine Translation", "Medical Research Libraries", "Academic Search Engines", "Information Retrieval"],
      whenNotToUse: "Avoid Word2Vec when words carry multiple meanings, sentence context matters a great deal, or the application needs true context-awareness.",
      takeaway: "Word2Vec introduced a revolutionary approach — an AI librarian who learns relationships simply by observing, rather than being told."
    },

    {
      id: "fasttext",
      section: "Language Representation",
      code: "3(d)",
      title: "FastText",
      cardLabel: "Reading Name Fragments",
      icon: "fa-puzzle-piece",
      analogy: "Understanding Name Fragments",
      definition: "FastText is an advanced word representation technique that learns the meaning of a word by analyzing its smaller parts — subwords or character n-grams — instead of treating the word as a single unit. This lets the model understand even unfamiliar or newly created words.",
      story: "A visitor named \"Hydroelectricity\" arrives, and the AI librarian has never met this visitor before. Instead of giving up, the librarian examines the pieces — Hydro, Electric, City — already knows Hydro relates to water and Electric to energy, and correctly guesses that Hydroelectricity belongs to renewable energy. That's exactly how FastText works.",
      purpose: ["Handle unknown or rare words", "Learn word meaning by studying smaller parts", "Improve representations for morphologically rich languages", "Increase accuracy for technical vocabulary"],
      working: [
        { title: "Break Words into Smaller Parts", content: "\"Hydroelectric\" splits into subwords: Hydro, Electric, Hydroelectric." },
        { title: "Learn Every Subword", content: "Hydro → Water, Electric → Electricity, Solar → Sun Energy, Bio → Life — each fragment carries its own learned meaning." },
        { title: "Combine Subword Information", content: "The meanings of all fragments combine mathematically into the final word representation, letting FastText understand words it has never fully seen before." }
      ],
      example: "A Medical Digital Library receives a paper containing \"Neuroimmunology.\" The AI has never seen the whole word, but recognizes Neuro (Nervous System) and Immunology (Immune System), and correctly predicts the paper belongs to medical science.",
      behindScenes: "Every word is divided into character sequences; each sequence gets its own vector; the vectors combine mathematically into the final word representation. Instead of memorizing whole words, the AI librarian learns the building blocks of language itself.",
      libraryComparison: [
        ["Reading Visitor's Full Name", "Reading Complete Word"],
        ["Reading Name Fragments", "Studying Subwords"],
        ["Guessing Visitor's Department", "Predicting Word Meaning"],
        ["Combining All Clues", "Final Word Vector"]
      ],
      advantages: ["Understands rare and unseen words", "Works well for technical and scientific vocabulary", "Handles spelling variations better than Word2Vec", "More accurate for morphologically rich languages"],
      limitations: ["Requires more computation than Word2Vec", "Longer training time", "Still one vector per word in a given context", "Cannot fully capture sentence-specific meaning"],
      applications: ["Medical document analysis", "Scientific article classification", "Search engines", "OCR text correction", "Digital libraries", "Language identification"],
      whenNotToUse: "FastText isn't ideal when deep sentence understanding is required, when context changes a word's meaning, or for advanced conversational AI.",
      takeaway: "FastText teaches the AI librarian to understand a visitor by carefully reading every part of their name, not just the complete name."
    },

    {
      id: "contextual",
      section: "Language Representation",
      code: "3(e)",
      title: "Contextual Embeddings",
      cardLabel: "Smart Dynamic Identity",
      icon: "fa-shuffle",
      analogy: "Smart Dynamic Identity",
      definition: "A Contextual Embedding generates a different representation for the same word depending on the surrounding words in the sentence — solving the problem of words that share a name but not a meaning.",
      story: "A visitor named \"Mercury\" arrives. In one conversation about planets, the librarian understands Mercury as a planet. Later, another visitor discussing chemical elements means Mercury the metal. The visitor's name hasn't changed — the surrounding conversation has. That is the idea behind Contextual Embeddings.",
      purpose: ["Understand meaning based on context", "Resolve ambiguity", "Improve language understanding", "Increase accuracy of translation, search and question-answering"],
      working: [
        { title: "Read the Complete Sentence", content: "The model takes in the whole sentence, not just an isolated word." },
        { title: "Identify the Target Word", content: "It locates the word whose meaning needs resolving." },
        { title: "Observe Surrounding Words", content: "\"The bank approved the education loan\" vs. \"Children played near the bank of the river.\"" },
        { title: "Generate a Unique Embedding", content: "Two different vectors are produced for \"bank\" because the surrounding words differ — Financial Institution vs. River Side." }
      ],
      example: "A National Geological Research Library stores the word \"Fault.\" \"The earthquake occurred along the fault\" means a geological fracture; \"The engineer identified the fault in the machine\" means a mechanical defect. Context lets the AI librarian pick the correct meaning each time.",
      behindScenes: "Modern Transformer models such as BERT read the entire sentence before generating an embedding. Instead of one fixed vector, the representation of each word is continuously updated based on its neighbours — a dynamic identity rather than a fixed one.",
      libraryComparison: [
        ["Visitor's Current Research Topic", "Sentence Context"],
        ["Visitor's Temporary Identity Badge", "Contextual Vector"],
        ["Different Badge for Different Rooms", "Different Meaning for Same Word"]
      ],
      advantages: ["Understands multiple meanings of words", "Highly accurate", "Excellent for translation and question answering", "Improves conversational AI", "Captures sentence-level meaning"],
      limitations: ["Computationally expensive", "Requires powerful hardware", "Longer training time", "Complex architecture"],
      applications: ["Chatbots", "Virtual Assistants", "Academic Search Engines", "Healthcare NLP", "Legal Document Analysis", "Machine Translation", "Question Answering"],
      whenNotToUse: "Skip Contextual Embeddings when the task is simple, resources are limited, or fast processing matters more than top accuracy.",
      takeaway: "Contextual Embeddings teach the AI librarian that a visitor's identity depends on the room they're standing in and the conversation happening around them."
    },

    {
      id: "statistical",
      section: "Language Models",
      code: "4(a)",
      title: "Statistical Language Models",
      cardLabel: "Predicting from Borrowing History",
      icon: "fa-chart-simple",
      analogy: "Borrowing History",
      definition: "A Statistical Language Model predicts the next word in a sentence by calculating the probability of word sequences based on patterns learned from a large collection of text — relying on how frequently words appear together rather than what they mean.",
      story: "The library has kept borrowing records for twenty years. The Archivists notice readers who search Artificial usually ask for Intelligence next, and Solar is often followed by Energy. When a student types \"I need a book on Machine…\", the Archivist predicts \"…Learning\" — not because it understands the topic, but because that pair has appeared together so often in the records.",
      purpose: ["Predict the next word in a sentence", "Estimate the probability of a sentence", "Improve predictive text and auto-complete", "Assist speech recognition systems", "Support grammar checking and early machine translation"],
      working: [
        { title: "Collect Books", content: "The AI reads millions of books, journals and papers stored in the library." },
        { title: "Count Word Frequencies", content: "It tallies co-occurring pairs: Machine–Learning (850), Machine–Design (300), Solar–Energy (920), Data–Analytics (780)." },
        { title: "Calculate Probability", content: "\"Machine Learning\" appears far more than \"Machine Design,\" so Learning gets a higher probability after Machine." },
        { title: "Predict the Next Word", content: "Input \"Machine ____\" → prediction \"Learning,\" the highest-probability continuation." }
      ],
      example: "A National Agricultural Research Library holds Smart Irrigation Systems, Smart Farming Techniques, Smart Greenhouses and Smart Crop Monitoring. Typing \"Smart ____\" prompts the AI to predict Farming or Irrigation, whichever phrase occurs more often in its collection.",
      behindScenes: "The AI reads thousands of documents, tokenizes sentences into words, counts how often words occur together, builds probability tables, and uses those tables to predict the likeliest next word — an informed guess from past observation, not comprehension.",
      libraryComparison: [
        ["Borrowing History", "Training Data"],
        ["Popular Book Combinations", "Frequently Occurring Word Pairs"],
        ["Librarian's Experience", "Probability Calculation"],
        ["Book Recommendation", "Next Word Prediction"]
      ],
      advantages: ["Simple and easy to implement", "Works well for small datasets", "Fast prediction", "Provides a mathematical foundation for language modeling", "Useful for basic predictive text systems"],
      limitations: ["Cannot understand the actual meaning of words", "Performs poorly on long sentences", "Struggles with unseen word combinations", "Requires storing large probability tables"],
      applications: ["Predictive keyboards", "Spell checking", "Speech recognition", "OCR correction", "Basic machine translation", "Auto-complete systems"],
      whenNotToUse: "Not suited when deep contextual understanding is required, a word carries multiple meanings, or high conversational accuracy is expected — Neural and Transformer-based models perform far better there.",
      takeaway: "A Statistical Language Model is like an experienced AI librarian who predicts the next book by remembering thousands of past borrowing patterns, rather than by understanding the book's actual content."
    },

    {
      id: "neural",
      section: "Language Models",
      code: "4(b)",
      title: "Neural Language Models",
      cardLabel: "Learning Hidden Connections",
      icon: "fa-network-wired",
      analogy: "The Intuitive Trainee",
      definition: "A Neural Language Model uses Artificial Neural Networks to learn relationships between words automatically. Instead of depending only on frequency counts, it identifies hidden patterns and semantic relationships within large collections of text, and keeps improving as it processes more data.",
      story: "A new librarian named Nova joins the library. Rather than memorizing borrowing records, she watches how readers behave: Machine Learning readers often reach for Artificial Intelligence, Renewable Energy researchers explore Solar Panels and Wind Turbines, and Robotics engineers look into Automation and Sensors. Over months, Nova learns the hidden relationships between topics — even recommending books on subjects she's never directly seen connected before.",
      purpose: ["Learn complex relationships between words", "Predict the next word more accurately", "Understand semantic similarities", "Handle unseen word combinations better", "Improve language generation and understanding"],
      working: [
        { title: "Collect Large Amounts of Text", content: "The AI librarian reads millions of books, papers and journals." },
        { title: "Convert Words into Embeddings", content: "Words become dense vectors carrying semantic information — Solar → [0.81, 0.22, 0.74], Wind → [0.79, 0.24, 0.71], Battery → [0.65, 0.58, 0.49]." },
        { title: "Train the Neural Network", content: "The network repeatedly predicts the next word, compares it to the correct answer, and adjusts its internal weights through thousands of cycles." },
        { title: "Make Predictions", content: "\"Renewable ____\" → Energy, Resources, or Technology, based on learned patterns." }
      ],
      example: "In a Digital Healthcare Library holding Medical Imaging Techniques, Disease Diagnosis Systems and Hospital Information Systems, a doctor typing \"Medical ____\" gets suggestions like Imaging, Diagnosis, Records and Equipment, learned from how these terms relate during training.",
      behindScenes: "Words become embeddings, pass through multiple neural network layers, and the network identifies hidden patterns. Wrong predictions produce an error, and the model adjusts its weights via Backpropagation — becoming more knowledgeable every cycle, like a trainee librarian learning from mistakes.",
      libraryComparison: [
        ["Reading Many Books", "Training Dataset"],
        ["Experienced Librarian", "Neural Network"],
        ["Learning Reader Interests", "Learning Word Relationships"],
        ["Improving Recommendations", "Updating Model Weights"]
      ],
      advantages: ["Learns automatically from large datasets", "Captures semantic relationships", "More accurate than Statistical Language Models", "Handles previously unseen sentences better", "Supports advanced NLP applications"],
      limitations: ["Requires large amounts of training data", "Needs high computational power", "Training can be time-consuming", "Complex architecture compared to statistical models"],
      applications: ["Chatbots", "Virtual Assistants", "Machine Translation", "Text Generation", "Email Auto-completion", "Intelligent Search Engines", "Speech Recognition", "Healthcare Information Systems"],
      whenNotToUse: "Neural Language Models are overkill when the dataset is very small, training must run fast on low-end devices, or compute is limited — a simpler statistical model may suffice.",
      takeaway: "A Neural Language Model is like an AI librarian who not only remembers borrowing patterns but also learns the hidden connections between books, making every recommendation smarter than before."
    },

    {
      id: "transformer",
      section: "Language Models",
      code: "4(c)",
      title: "Transformer-based Representations",
      cardLabel: "Reading the Whole Page at Once",
      icon: "fa-diagram-project",
      analogy: "Reading the Whole Page",
      definition: "A Transformer-based Representation processes an entire sentence at once and uses Self-Attention to understand how every word relates to every other word — capturing context and meaning far more accurately. BERT and GPT are its best-known examples.",
      story: "An AI librarian named Astra receives: \"The researcher presented the renewable energy project at the science conference.\" Instead of reading word by word, Astra reads the whole sentence together, immediately grasping who did what, where, and why — and recommends the most relevant books based on that complete understanding.",
      purpose: ["Understand the complete context of a sentence", "Capture relationships between distant words", "Improve text generation, translation and question answering", "Increase accuracy of modern NLP applications"],
      working: [
        { title: "Read the Complete Sentence", content: "The whole sentence is processed together, not token by token in isolation." },
        { title: "Convert Words into Vectors", content: "Each word becomes a numerical representation." },
        { title: "Apply Self-Attention", content: "The model calculates how strongly every word connects to every other word in the sentence." },
        { title: "Generate Context-Aware Representations", content: "The resulting embeddings feed tasks like translation, summarization or question answering with high accuracy." }
      ],
      example: "A National Environmental Digital Library receives the query \"How can cities reduce air pollution?\" The Transformer understands the user is asking about solutions, cities and air pollution together, and retrieves the most relevant research instead of simply matching isolated keywords.",
      behindScenes: "The Transformer analyzes the entire sentence simultaneously. Self-Attention calculates how strongly every word is connected to every other word, letting the AI grasp complete meaning before generating any response.",
      libraryComparison: [
        ["Whole-Page Reading", "Full Sentence Processing"],
        ["Page Notes", "Self-Attention"],
        ["One Fixed Badge", "Context-Aware Vector"],
        ["Word-by-Word Reading", "Parallel Contextual Analysis"],
        ["Static Identity", "Dynamic Meaning"]
      ],
      advantages: ["Understands complete sentence context", "Highly accurate for complex NLP tasks", "Captures long-distance relationships between words", "Forms the foundation of modern models like BERT and GPT"],
      limitations: ["Requires powerful computers for training", "High memory and computational cost", "Complex architecture"],
      applications: ["Chatbots and Virtual Assistants", "Machine Translation", "Search Engines", "Text Summarization", "Question Answering Systems", "Content Generation"],
      whenNotToUse: "Transformers aren't the best fit for very simple tasks or tight compute budgets, where smaller models perform adequately at far lower cost.",
      takeaway: "A Transformer is like an expert AI librarian who reads the entire page before answering, ensuring every recommendation is based on complete understanding rather than individual words."
    }
  ],

  /* ---------------------------------------------------------------------
     COMPARISON ARENA — AI Duel Cards
     Metric scale: 0 = None/Poor, 1 = Limited/Moderate, 2 = Strong/High
     --------------------------------------------------------------------- */
  comparisons: [
    {
      id: "tf-vs-tfidf",
      left: "tf",
      right: "tfidf",
      metrics: [
        { label: "Local Frequency", left: 2, right: 1 },
        { label: "Global Rarity", left: 0, right: 2 },
        { label: "Computational Cost", left: 2, right: 1 },
        { label: "Keyword Importance", left: 0, right: 2 },
        { label: "Suitability for Search", left: 0, right: 2 }
      ]
    },
    {
      id: "onehot-vs-embeddings",
      left: "onehot", right: "embeddings",
      metrics: [
        { label: "Unique Identity",      left: 2, right: 2 },
        { label: "Captures Meaning",     left: 0, right: 2 },
        { label: "Memory Efficient",     left: 0, right: 2 },
        { label: "Learns Automatically", left: 0, right: 1 },
        { label: "Understands Context",  left: 0, right: 0 }
      ]
    },
    {
      id: "word2vec-vs-fasttext",
      left: "word2vec", right: "fasttext",
      metrics: [
        { label: "Captures Meaning",       left: 2, right: 2 },
        { label: "Learns Automatically",   left: 2, right: 2 },
        { label: "Handles Unknown Words",  left: 0, right: 2 },
        { label: "Training Speed",         left: 2, right: 1 },
        { label: "Understands Context",    left: 0, right: 0 }
      ]
    },
    {
      id: "statistical-vs-neural",
      left: "statistical", right: "neural",
      metrics: [
        { label: "Understands Relationships", left: 0, right: 2 },
        { label: "Handles New Sentences",      left: 0, right: 2 },
        { label: "Accuracy",                   left: 1, right: 2 },
        { label: "Computational Cost",         left: 0, right: 2 },
        { label: "Training Simplicity",        left: 2, right: 0 }
      ]
    },
    {
      id: "neural-vs-transformer",
      left: "neural", right: "transformer",
      metrics: [
        { label: "Understands Context",       left: 0, right: 2 },
        { label: "Long-Range Relationships",  left: 1, right: 2 },
        { label: "Accuracy",                  left: 1, right: 2 },
        { label: "Computational Cost",        left: 1, right: 2 },
        { label: "Architecture Simplicity",   left: 1, right: 0 }
      ]
    }
  ],

  /* Detailed comparison tables shown when clicking 'Details' in the Arena */
  comparisonDetails: {
    "tf-vs-tfidf": {
      title: "TF (Term Frequency) vs TF-IDF (Term Frequency–Inverse Document Frequency)",
      rows: [
        ["Feature", "TF (Term Frequency)", "TF-IDF"],
        ["Definition", "Measures how many times a word appears in a document.", "Measures the importance of a word by considering both its frequency in a document and its rarity across all documents."],
        ["Working Mechanism", "Counts the number of occurrences of a word in a document.", "Multiplies Term Frequency by Inverse Document Frequency to reduce importance of very common words."],
        ["Example", "If \"water\" appears 15 times, TF = 15.", "If \"water\" appears in almost every document, its TF-IDF score becomes lower because it is less informative."],
        ["Computational Complexity", "Low — only word counting.", "Moderate — requires document frequency across corpus."],
        ["Strengths", "Easy to calculate and understand.", "Highlights important keywords while reducing impact of common words."],
        ["Weaknesses", "Common words may receive high importance; cannot capture meaning or context.", "Requires global statistics; still cannot capture full semantics."],
        ["Suitable Applications", "Word counting, simple document analysis.", "Search engines, document ranking, keyword extraction, information retrieval."]
      ],
      conclusion: "Key Difference: TF measures frequency, while TF-IDF measures importance."
    },
    "word2vec-vs-fasttext": {
      title: "Word2Vec vs FastText",
      rows: [
        ["Feature", "Word2Vec", "FastText"],
        ["Definition", "Learns word representations by observing neighbouring words.", "Learns word representations by analyzing both complete words and their smaller character parts (subwords)."],
        ["Working Mechanism", "Treats each word as one independent unit during training.", "Splits words into smaller character sequences and combines them to create word vectors."],
        ["Example", "May not recognise an unseen word like Agroinformatics.", "Understands Agroinformatics by analysing 'Agro' and 'Informatics'."],
        ["Computational Complexity", "Moderate training time.", "Slightly higher — processes subword information."],
        ["Strengths", "Produces meaningful word vectors quickly and efficiently.", "Handles unknown words, spelling variations, and rare words more effectively."],
        ["Weaknesses", "Cannot represent unseen or rare words accurately.", "Requires more memory and additional computation."],
        ["Suitable Applications", "Text classification, recommendation systems, semantic similarity.", "Medical NLP, scientific documents, multilingual applications, morphologically rich languages."]
      ],
      conclusion: "Key Difference: Word2Vec learns from complete words, whereas FastText learns from both complete words and subword components."
    },
    "statistical-vs-neural": {
      title: "Statistical Language Models vs Neural Language Models",
      rows: [
        ["Feature", "Statistical Language Models", "Neural Language Models"],
        ["Definition", "Predict next word using probability and word frequency statistics.", "Predict next word using neural networks that learn language patterns automatically."],
        ["Working Mechanism", "Counts how frequently words appear together and calculates probabilities.", "Learns hidden relationships between words using neural network training."],
        ["Computational Complexity", "Low to moderate.", "High — multiple neural layers and large data."],
        ["Strengths", "Simple, fast, suitable for small datasets.", "More accurate, captures semantic relationships, generalizes better."],
        ["Weaknesses", "Performs poorly on long sentences and unseen combinations.", "Requires large datasets, longer training time, powerful hardware."],
        ["Suitable Applications", "Predictive text, spell checking, basic speech recognition.", "Chatbots, machine translation, virtual assistants, intelligent search systems."]
      ],
      conclusion: "Key Difference: Statistical models rely on counting frequencies, while Neural models learn patterns automatically from data."
    },
    "onehot-vs-embeddings": {
      title: "One-Hot Encoding vs Word Embeddings",
      rows: [
        ["Feature", "One-Hot Encoding", "Word Embeddings"],
        ["Definition", "Represents each word with a unique binary vector containing one 1 and all other values 0.", "Represents words using dense numerical vectors that capture semantic meaning and similarity."],
        ["Working Mechanism", "Assigns every word a unique position in a large vector.", "Learns compact vectors based on how words appear in similar contexts."],
        ["Example", "Solar → [0 1 0 0 0]", "Solar → [0.82, 0.31, 0.67]"],
        ["Computational Complexity", "Low implementation cost but high memory usage for large vocabularies.", "Moderate computational cost but much more memory efficient."],
        ["Strengths", "Easy to implement and understand.", "Captures word meaning, similarity, and semantic relationships."],
        ["Weaknesses", "Does not represent meaning and produces sparse vectors.", "Requires training data and cannot represent multiple meanings without contextual models."],
        ["Suitable Applications", "Basic NLP projects, educational demos.", "Deep learning, search engines, recommendation systems, machine translation."]
      ],
      conclusion: "Key Difference: One-Hot identifies words; Word Embeddings capture relationships and meanings." 
    },
    "neural-vs-transformer": {
      title: "Neural Language Models vs Transformer-based Models",
      rows: [
        ["Feature", "Neural Language Models", "Transformer-based Models"],
        ["Definition", "Predict the next word using artificial neural networks that learn language patterns.", "Use self-attention to model relationships across the entire sentence for context-aware representations."],
        ["Working Mechanism", "Learns hidden relationships via neural architectures (RNNs, LSTMs) that process sequences.", "Applies self-attention across tokens in parallel to capture long-range dependencies."],
        ["Computational Complexity", "High for sequence models due to recurrent steps.", "High — parallelizable but memory intensive for long sequences."],
        ["Strengths", "Capable of modelling sequence dynamics and local temporal structure.", "Better at capturing long-range context and parallel training; state-of-the-art for many tasks."],
        ["Weaknesses", "RNN-based models struggle with very long-range dependencies and are harder to parallelize.", "Transformers require large compute and memory; may need huge datasets to train effectively."],
        ["Suitable Applications", "Speech recognition, early sequence modelling tasks.", "Machine translation, large-scale language modelling, text generation, and many modern NLP tasks."]
      ],
      conclusion: "Key Difference: Recurrent neural language models process sequences step-by-step; Transformers use self-attention to analyze whole sequences in parallel, giving superior long-range context modelling and scalability." 
    },
    "overall-conclusion": {
      title: "Overall Conclusion",
      rows: [],
      conclusion: "Each NLP technique has strengths for different purposes: stemming and TF favour simplicity; lemmatization and TF-IDF give more meaningful processing; Word2Vec and FastText generate intelligent representations (FastText handles unknown words better); neural models and embeddings outperform traditional approaches by learning semantics, making them preferred for modern AI applications like chatbots, search engines, and translation."
    }
  },

  /* Workflow Observatory board — three coded columns */
  observatoryBoard: [
    {
      eyebrow: "Column A",
      title: "Text Preprocessing Pipeline",
      icon: "fa-filter-circle-dollar",
      variant: "violet",
      steps: [
        { icon: "fa-file-lines", label: "Document Intake", desc: "Raw text arrives from books, pages, or chat logs." },
        { icon: "fa-scissors", label: "Sentence Segmentation", desc: "The library cuts long text into individual rooms of meaning." },
        { icon: "fa-qrcode", label: "Tokenization", desc: "Each sentence is split into visitor-sized units." },
        { icon: "fa-font", label: "Case Normalization", desc: "The archive removes case clutter so words line up." },
        { icon: "fa-broom", label: "Noise Removal", desc: "HTML tags, URLs, emojis, and stray symbols are scrubbed away." },
        { icon: "fa-filter", label: "Stop-word Filtering", desc: "Common fillers are set aside so meaning stands out." },
        { icon: "fa-address-book", label: "Lemmatization", desc: "Words are restored to their canonical library names." },
        { icon: "fa-sparkles", label: "Text Cleaning", desc: "The text is polished and ready for the next chamber." },
        { icon: "fa-magnifying-glass", label: "Quality Check", desc: "The Archivists inspect the cleaned text for consistency." },
        { icon: "fa-check", label: "Ready for Features", desc: "The cleaned passage is now suitable for feature extraction." }
      ]
    },
    {
      eyebrow: "Column B",
      title: "Feature Engineering Pipeline",
      icon: "fa-wand-magic-sparkles",
      variant: "emerald",
      steps: [
        { icon: "fa-book-open", label: "Vocabulary Build", desc: "Every unique word becomes a candidate feature." },
        { icon: "fa-list-ol", label: "Bag of Words", desc: "Counts are taken for each token in the document." },
        { icon: "fa-layer-group", label: "N-Gram Capture", desc: "Short word patterns preserve local order." },
        { icon: "fa-chart-simple", label: "TF Calculation", desc: "The system measures how often a word appears locally." },
        { icon: "fa-balance-scale", label: "IDF Calculation", desc: "The library scores how rare a word is across the corpus." },
        { icon: "fa-matrix", label: "TF-IDF Weighting", desc: "Local importance and global rarity are combined into a weight." },
        { icon: "fa-sliders", label: "Feature Matrix", desc: "The document becomes a structured numerical representation." }
      ]
    },
    {
      eyebrow: "Column C",
      title: "Text-to-Vector Transformation",
      icon: "fa-arrows-spin",
      variant: "cyan",
      steps: [
        { icon: "fa-id-card", label: "One-Hot Encoding", desc: "Each word receives a sparse identity vector." },
        { icon: "fa-user-astronaut", label: "Dense Embeddings", desc: "Words start carrying meaning rather than only identity." },
        { icon: "fa-brain", label: "Word2Vec", desc: "Vectors are learned by observing context in the corpus." },
        { icon: "fa-puzzle-piece", label: "FastText", desc: "Subword pieces help unseen words find their place." },
        { icon: "fa-shuffle", label: "Contextual Embeddings", desc: "Meaning shifts with the sentence around the word." },
        { icon: "fa-diagram-project", label: "Transformer Attention", desc: "The entire sentence is interpreted together." },
        { icon: "fa-satellite-dish", label: "Context-Aware Vector", desc: "The final vector captures meaning, role, and relationship." }
      ]
    }
  ],

  /* Research Timeline */
  timeline: [
    { year: "1980s", label: "Statistical Models", desc: "Frequency-based prediction becomes the library's first method for anticipating what readers want next." },
    { year: "2003",  label: "Word2Vec Foundations", desc: "Neural approaches to learning word relationships begin to take shape." },
    { year: "2016",  label: "FastText", desc: "Subword modelling lets the library finally understand words it has never seen." },
    { year: "2018",  label: "BERT", desc: "Bidirectional Transformers bring deep, whole-sentence context into the library." },
    { year: "2020+", label: "GPT Era", desc: "Large generative Transformers begin composing, not just retrieving." },
    { year: "Future", label: "Multimodal AI", desc: "The library imagines archivists that read text, images and sound as one." }
  ],

  /* NLP for Society — grounded in the Applications already listed across topics */
  impact: [
    { label: "Healthcare NLP", icon: "fa-staff-snake", desc: "Contextual Embeddings and Transformers help parse medical imaging reports and diagnosis systems accurately." },
    { label: "Academic & Medical Research", icon: "fa-microscope", desc: "FastText and Word2Vec power research libraries that must understand rare, technical, and newly coined terms." },
    { label: "Machine Translation", icon: "fa-language", desc: "Every representation method in this repository, from embeddings to Transformers, underpins modern translation systems." },
    { label: "Legal & Governance Documents", icon: "fa-scale-balanced", desc: "Contextual understanding helps disambiguate dense, formal language in legal and administrative texts." },
    { label: "Assistive & Conversational AI", icon: "fa-comments", desc: "Chatbots and virtual assistants rely on the full stack — from statistical prediction to self-attention — to respond naturally." },
    { label: "Search & Information Retrieval", icon: "fa-magnifying-glass", desc: "Search engines and recommendation systems use embeddings so that meaning, not just keywords, drives what readers find." }
  ],

  /* Contributors Hall */
  contributors: [
    {
      name: "Rujuta Salvi",
      percent: 50,
      roles: ["Frontend Design", "UI Development", "Workflow Design", "GitHub Deployment", "Concept Integration"]
    },
    {
      name: "Nidhi Shah",
      percent: 50,
      roles: ["Research", "Documentation", "Comparative Analysis", "Applications", "Content Structuring"]
    }
  ],

  contributionMatrix: {
    rows: ["Design", "Development", "Research", "Documentation", "Testing", "Deployment"],
    cols: ["Rujuta", "Nidhi"],
    values: [
      [2, 1],
      [2, 1],
      [1, 2],
      [1, 2],
      [1, 1],
      [2, 1]
    ]
  },

  /* AI Archivist Assistant — predefined knowledge base, no backend required */
  archivistKB: [
    {
      keywords: ["preprocessing", "segmentation", "tokenization", "normalization", "stop-word", "stemming", "lemmatization", "cleaning"],
      answer: "Text Preprocessing is the cleaning and preparation stage of NLP. It includes: Sentence Segmentation (splitting text into sentences), Tokenization (breaking sentences into words/tokens), Case Normalization (lowercasing), Stop-word Removal (removing uninformative words like 'the'), Stemming/Lemmatization (reducing words to their roots), and Noise Removal (stripping HTML, punctuation, or URLs). Together, these form a Text Cleaning pipeline that readies raw text for analysis."
    },
    {
      keywords: ["feature engineering", "bag of words", "bow", "n-grams", "ngram", "tf-idf", "tfidf", "frequency", "idf"],
      answer: "Feature Engineering transforms cleaned text into numerical features for machine learning. This includes Bag of Words (counting word occurrences), N-Grams (grouping contiguous sequences of N words to keep order), Term Frequency (TF, localized word frequency), Inverse Document Frequency (IDF, global word rarity), and TF-IDF (multiplying TF by IDF to weight words based on local relevance and global uniqueness)."
    },
    {
      keywords: ["fasttext"],
      answer: "FastText learns word meaning from smaller pieces — subwords and character fragments — instead of whole words. That's how it can understand a word like \"Neuroimmunology\" even if it has never seen the complete word before, by recognizing Neuro and Immunology separately."
    },
    {
      keywords: ["word2vec", "different", "embedding"],
      answer: "Word Embeddings are the destination — dense vectors placing similar words close together. Word2Vec is the method that learns those vectors automatically, by predicting a word from its neighbours (CBOW) or predicting neighbours from a word (Skip-Gram)."
    },
    {
      keywords: ["pipeline", "workflow", "journey"],
      answer: "The Language Representation Journey in this library runs: Word → One-Hot → Embedding → Word2Vec → FastText → Contextual Representation. Each stage gives the AI Archivists a richer way to understand a visitor — from a bare identity card to a dynamic, context-aware badge."
    },
    {
      keywords: ["mapping", "document", "book", "word", "visitor", "sentence", "room", "concept mapping", "archivist mapping"],
      answer: "The Archivist mapping uses a simple metaphor: Documents become Books, Words become Visitors, Sentences become Rooms, and Meaning becomes a shared interest profile. That lets the library describe NLP as an ordered set of places and relationships rather than isolated techniques."
    },
    {
      keywords: ["transformer", "attention", "bert", "gpt"],
      answer: "Transformers read an entire sentence at once and use Self-Attention to work out how strongly every word relates to every other word. That whole-sentence view is what lets models like BERT and GPT resolve ambiguity and generate context-aware language."
    },
    {
      keywords: ["one-hot", "onehot", "one hot"],
      answer: "One-Hot Encoding gives every word a vector with a single 1 and the rest 0s — a unique ID, like a membership card. It identifies a word perfectly but says nothing about what the word means or which other words it's related to."
    },
    {
      keywords: ["statistical", "neural", "language model"],
      answer: "Statistical Language Models predict the next word from frequency counts in past text — like a librarian recalling borrowing patterns. Neural Language Models use neural networks to learn deeper, hidden relationships between words, so they generalize far better to sentences they've never seen."
    },
    {
      keywords: ["contextual", "context", "ambiguity", "bank", "mercury"],
      answer: "Contextual Embeddings give the same word a different vector depending on its sentence — so \"Mercury\" the planet and \"Mercury\" the metal end up with different representations, resolved by the words around them."
    },
    {
      keywords: ["hello", "hi", "hey"],
      answer: "Welcome to the Infinity Knowledge Library! Ask me about Text Preprocessing, Feature Engineering, One-Hot Encoding, Word Embeddings, Word2Vec, FastText, Contextual Embeddings, Statistical Language Models, Neural Language Models, or Transformers."
    }
  ],

  archivistSuggestions: [
    "What is TF-IDF?",
    "What is FastText?",
    "How is Word2Vec different?",
    "Show the NLP pipeline"
  ]
};
